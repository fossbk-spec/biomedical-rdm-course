import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import SiteFooter from './SiteFooter.vue'
import Quiz from './Quiz.vue'
import QuizResult from './QuizResult.vue'
import Mermaid from './Mermaid.vue'
import './quiz.css'
import './mermaid.css'

export default {
  extends: DefaultTheme,
  // Chân trang hiển thị trên mọi trang (footer mặc định bị ẩn khi có sidebar).
  Layout: () => h(DefaultTheme.Layout, null, { 'layout-bottom': () => h(SiteFooter) }),
  enhanceApp({ app }) {
    app.component('Quiz', Quiz)
    app.component('QuizResult', QuizResult)
    app.component('Mermaid', Mermaid)
  },
}
