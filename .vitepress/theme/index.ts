import DefaultTheme from 'vitepress/theme'
import Quiz from './Quiz.vue'
import QuizResult from './QuizResult.vue'
import './quiz.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Quiz', Quiz)
    app.component('QuizResult', QuizResult)
  },
}
