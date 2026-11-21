import { defineConfig } from 'vitepress'
import { quizPlugin } from './plugins/quiz.mts'

export default defineConfig({
  title: 'Biomedical RDM Mini-course',
  description: 'Quản lý dữ liệu nghiên cứu y sinh',
  lang: 'vi',
  base: '/biomedical-rdm-course/',
  srcExclude: ['README.md', 'CONTRIBUTING.md', 'docs/**', 'node_modules/**'],
  vite: { plugins: [quizPlugin()] },
  themeConfig: {
    search: { provider: 'local' },
    nav: [
      { text: 'Đề cương', link: '/course/book/syllabus' },
      { text: 'Giáo trình đầy đủ', link: '/course/book/' },
      { text: 'Nguồn khoa học', link: 'https://github.com/fossbk-spec/biomedical-rdm' },
    ],
    sidebar: [
      { text: 'Giới thiệu', items: [
        { text: 'Đề cương khóa học', link: '/course/syllabus' },
        { text: 'Nhập môn và cách học', link: '/course/module-0-intro/' },
      ] },
      { text: 'Giáo trình đầy đủ', items: [
        { text: 'Mục lục giáo trình', link: '/course/book/' },
        { text: 'Đề cương tự học', link: '/course/book/syllabus' },
        { text: 'Chương 0 — Bắt đầu', link: '/course/book/ch00' },
        { text: 'Chương 1 — Tổng quan và DMP', link: '/course/book/ch01' },
        { text: 'Chương 2 — Thu thập và REDCap', link: '/course/book/ch02' },
        { text: 'Chương 3 — CDISC, FHIR, OMOP', link: '/course/book/ch03' },
        { text: 'Chương 4 — Chất lượng và dữ liệu khuyết', link: '/course/book/ch04' },
        { text: 'Chương 5 — Bảo mật và khử định danh', link: '/course/book/ch05' },
        { text: 'Chương 6 — FAIR và AI-ready', link: '/course/book/ch06' },
        { text: 'Chương 7 — Hoàn thành và capstone', link: '/course/book/ch07' },
      ] },
      { text: 'Phụ lục', items: [
        { text: 'Danh mục phụ lục', link: '/course/book/appendices/changelog' },
        { text: 'Pháp lý và chính sách', link: '/course/book/appendices/legal' },
        { text: 'Chuẩn, công cụ và kho', link: '/course/book/appendices/standards' },
        { text: 'Funder templates', link: '/course/book/appendices/funder-templates' },
        { text: 'Thời hạn lưu trữ', link: '/course/book/appendices/retention' },
        { text: 'Ghi chú lab', link: '/course/book/appendices/quality-ai-lab-notes' },
        { text: 'QA pháp lý', link: '/course/book/appendices/legal-verification' },
      ] },
      { text: 'Danh mục tham khảo', items: [
        { text: 'References', link: '/course/book/references' },
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
        { text: 'Bài 5 — Bảo mật và khử định danh', link: '/course/module-5-privacy/' },
        { text: 'Quiz 5', link: '/course/module-5-privacy/quiz' },
        { text: 'Bài 6 — FAIR và AI-ready', link: '/course/module-6-fair-ai/' },
        { text: 'Quiz 6', link: '/course/module-6-fair-ai/quiz' },
      ] },
      { text: 'Tổng kết', items: [
        { text: 'Quiz tổng hợp', link: '/course/final-quiz' },
        { text: 'Thuật ngữ', link: '/course/glossary' },
        { text: 'Lộ trình', link: '/ROADMAP' },
      ] },
    ],
  },
})
