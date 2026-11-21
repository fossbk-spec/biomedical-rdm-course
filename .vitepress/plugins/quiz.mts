// Biến các trang quiz markdown tĩnh thành dữ liệu cho component <Quiz/>.
// File nguồn không bị sửa: chuyển đổi chỉ diễn ra lúc build.
import type { Plugin } from 'vite'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

export interface Question {
  id: string
  text: string
  options: { key: string; text: string }[]
  answer: string
  explain: string
}

const strip = (s: string) => s.replace(/\*\*/g, '').trim()

export function parseQuiz(src: string) {
  const lines = src.replace(/\r\n/g, '\n').split('\n')
  const title = (lines.find((l) => l.startsWith('# ')) ?? '# Quiz').slice(2).trim()
  const questions: Question[] = []
  let cur: Question | null = null
  const trailer: string[] = []
  let inTrailer = false
  for (const line of lines) {
    if (line.startsWith('# ')) continue
    if (/^\*\*Cách tính điểm/.test(line) || /^---\s*$/.test(line)) inTrailer = true
    if (inTrailer) {
      trailer.push(line)
      continue
    }
    const ans = line.match(/^- \*\*Đáp án: ([A-D])\.\*\*\s*(.*)$/)
    const opt = line.match(/^- ([A-D])\. (.*)$/)
    if (ans && cur) {
      cur.answer = ans[1]
      cur.explain = ans[2].trim()
      continue
    }
    if (opt && cur) {
      cur.options.push({ key: opt[1], text: opt[2].trim() })
      continue
    }
    if (/^\*\*/.test(line)) {
      const t = strip(line)
      const m = t.match(/^(Q\d+\.|\d+\.\d+\.)\s*(.*)$/)
      cur = { id: m ? m[1] : '', text: m ? m[2] : t, options: [], answer: '', explain: '' }
      questions.push(cur)
    }
  }
  const bad = questions.filter((q) => q.options.length !== 4 || !q.answer)
  if (bad.length) throw new Error('Quiz parse error: ' + bad.map((q) => q.id || q.text).join(', '))
  return {
    title,
    questions,
    trailer: trailer.filter((l) => !/^---\s*$/.test(l)).join('\n').trim(),
  }
}

export const quizKeyOf = (path: string) => path.match(/course\/(module-[^/]+|final-quiz)/)?.[1]

export function quizPlugin(): Plugin {
  return {
    name: 'rdm-quiz',
    enforce: 'pre',
    transform(code, id) {
      const path = id.split('?')[0].replace(/\\/g, '/')
      if (!/\/course\/(.*\/)?(quiz|final-quiz)\.md$/.test(path)) return null
      const { title, questions, trailer } = parseQuiz(code)
      const key = quizKeyOf(path)!
      // Quiz tổng hợp cần đáp án đúng của 6 bài để tính điểm chung.
      let lessons = ''
      if (key === 'final-quiz') {
        const courseDir = dirname(path)
        const answers: Record<string, string[]> = {}
        for (const d of readdirSync(courseDir).filter((n) => n.startsWith('module-')).sort()) {
          const f = join(courseDir, d, 'quiz.md')
          if (existsSync(f)) answers[d] = parseQuiz(readFileSync(f, 'utf-8')).questions.map((q) => q.answer)
        }
        lessons = `lessonAnswers: ${JSON.stringify(answers)}\n`
      }
      const fm = `---\nquizKey: ${key}\nquestions: ${JSON.stringify(questions)}\n${lessons}---\n\n`
      const result = key === 'final-quiz' ? '<QuizResult />\n\n' : ''
      return `${fm}# ${title}\n\n<Quiz />\n\n${result}${trailer}\n`
    },
  }
}
