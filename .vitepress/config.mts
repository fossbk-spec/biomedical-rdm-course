import { defineConfig } from 'vitepress'
import { quizPlugin } from './plugins/quiz.mts'

export default defineConfig({
  title: 'Biomedical RDM Mini-course',
  description: 'Quản lý dữ liệu nghiên cứu y sinh',
  lang: 'vi',
  srcExclude: ['README.md', 'CONTRIBUTING.md', 'docs/**', 'node_modules/**'],
  vite: { plugins: [quizPlugin()] },
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: 'Đề cương', link: '/course/syllabus' },
      { text: 'Nguồn khoa học', link: 'https://github.com/fossbk-spec/biomedical-rdm' },
    ],
    sidebar: [
      { text: 'Giới thiệu', items: [
        { text: 'Đề cương khóa học', link: '/course/syllabus' },
        { text: 'Nhập môn và cách học', link: '/course/module-0-intro/' },
      ] },
      { text: 'Các bài học', items: [
        { text: 'Bài 1 — DMP', link: '/course/module-1-dmp/' },
        { text: 'Quiz 1', link: '/course/module-1-dmp/quiz' },
        { text: 'Bài 2 — ALCOA+, GCP, EDC', link: '/course/module-2-collection/' },
        { text: 'Quiz 2', link: '/course/module-2-collection/quiz' },
        { text: 'Bài 3 — CDISC, FHIR, OMOP', link: '/course/module-3-standards/' },
        { text: 'Quiz 3', link: '/course/module-3-standards/quiz' },
        { text: 'Bài 4 — Chất lượng dữ liệu', link: '/course/module-4-quality/' },
        { text: 'Quiz 4', link: '/course/module-4-quality/quiz' },
        { text: 'Bài 5 — FAIR và chia sẻ', link: '/course/module-5-fair/' },
        { text: 'Quiz 5', link: '/course/module-5-fair/quiz' },
        { text: 'Bài 6 — Bảo mật, pháp lý, AI', link: '/course/module-6-privacy-ai/' },
        { text: 'Quiz 6', link: '/course/module-6-privacy-ai/quiz' },
      ] },
      { text: 'Tổng kết', items: [
        { text: 'Quiz tổng hợp', link: '/course/final-quiz' },
        { text: 'Thuật ngữ', link: '/course/glossary' },
        { text: 'Lộ trình', link: '/ROADMAP' },
      ] },
    ],
  },
})
