<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useData } from 'vitepress'
import { load, LESSONS } from './store'

const { frontmatter } = useData()
const finalQs = frontmatter.value.questions as any[]
const lessonAnswers = frontmatter.value.lessonAnswers as Record<string, string[]>
const state = ref<Record<string, Record<number, string>>>({})
const ready = ref(false)

// Đáp án đúng của các bài được nhúng lúc build; đáp án người học chọn lấy từ localStorage.
const refresh = () => {
  for (const k of [...LESSONS, 'final-quiz']) state.value[k] = load(k).picks
}
onMounted(() => {
  refresh()
  ready.value = true
  window.addEventListener('rdm-quiz-saved', refresh)
})
onUnmounted(() => window.removeEventListener('rdm-quiz-saved', refresh))

const lessonRows = computed(() =>
  LESSONS.map((k) => ({
    k,
    total: lessonAnswers[k]?.length ?? 0,
    answered: Object.keys(state.value[k] ?? {}).length,
    right: (lessonAnswers[k] ?? []).filter((a, i) => state.value[k]?.[i] === a).length,
  })),
)
const finalAnswered = computed(() => Object.keys(state.value['final-quiz'] ?? {}).length)
const finalRight = computed(() => finalQs.filter((q, i) => state.value['final-quiz']?.[i] === q.answer).length)
const total = computed(() => lessonRows.value.reduce((a, b) => a + b.right, 0) + finalRight.value)
const maxTotal = computed(() => lessonRows.value.reduce((a, b) => a + b.total, 0) + finalQs.length)
const q13 = computed(() => finalQs.slice(0, 3).filter((q, i) => state.value['final-quiz']?.[i] === q.answer).length)
const complete = computed(
  () => lessonRows.value.every((l) => l.total && l.answered === l.total) && finalAnswered.value === finalQs.length,
)
const pass = computed(() => total.value >= 24 && q13.value >= 2)
</script>

<template>
  <div v-if="ready" class="rdm-result">
    <h2>Kết quả khóa học</h2>
    <ul>
      <li v-for="l in lessonRows" :key="l.k">{{ l.k }}: {{ l.right }}/{{ l.total }} (đã trả lời {{ l.answered }})</li>
      <li>Quiz tổng hợp: {{ finalRight }}/{{ finalQs.length }} (đã trả lời {{ finalAnswered }})</li>
    </ul>
    <p>
      Tổng: <strong>{{ total }}/{{ maxTotal }}</strong> · Câu Q1–Q3 đúng: <strong>{{ q13 }}/3</strong>
    </p>
    <p v-if="!complete">Chưa đủ dữ liệu: hãy hoàn thành cả 6 quiz bài và quiz tổng hợp trên trình duyệt này.</p>
    <p v-else :class="pass ? 'ok' : 'bad'" class="rdm-verdict">
      {{ pass ? 'ĐẠT' : 'CHƯA ĐẠT' }} — điều kiện: ≥ 24/34 và đúng ít nhất 2/3 câu Q1–Q3.
    </p>
    <p class="rdm-note">
      Kết quả chỉ lưu trong trình duyệt của bạn, không gửi đi đâu và không phải chứng nhận chính thức.
    </p>
  </div>
</template>
