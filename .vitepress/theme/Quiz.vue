<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useData } from 'vitepress'
import { load, save } from './store'

const { frontmatter } = useData()
const key = frontmatter.value.quizKey as string
const questions = frontmatter.value.questions as any[]
const picks = reactive<Record<number, string>>({})
const attempts = ref(1)
const isFinal = key === 'final-quiz'

onMounted(() => {
  const s = load(key)
  Object.assign(picks, s.picks)
  attempts.value = s.attempts
})

const persist = () => save(key, { picks: { ...picks }, attempts: attempts.value })

function pick(i: number, o: string) {
  if (picks[i]) return
  picks[i] = o
  persist()
}

const done = computed(() => Object.keys(picks).length)
const correct = computed(() => questions.filter((q, i) => picks[i] === q.answer).length)

function retry() {
  Object.keys(picks).forEach((k) => delete picks[+k])
  attempts.value++
  persist()
}
</script>

<template>
  <div class="rdm-quiz">
    <div v-for="(q, i) in questions" :key="i" class="rdm-q">
      <p class="rdm-q-text"><strong>{{ q.id }}</strong> {{ q.text }}</p>
      <button
        v-for="o in q.options"
        :key="o.key"
        type="button"
        class="rdm-opt"
        :disabled="!!picks[i]"
        :class="{ ok: picks[i] && o.key === q.answer, bad: picks[i] === o.key && o.key !== q.answer }"
        @click="pick(i, o.key)"
      >
        <b>{{ o.key }}.</b> {{ o.text }}
      </button>
      <p v-if="picks[i]" class="rdm-explain" :class="picks[i] === q.answer ? 'ok' : 'bad'">
        {{ picks[i] === q.answer ? 'Đúng.' : 'Chưa đúng — đáp án: ' + q.answer + '.' }} {{ q.explain }}
      </p>
    </div>
    <div class="rdm-score" role="status">
      Đã trả lời {{ done }}/{{ questions.length }} · Đúng {{ correct }}/{{ questions.length }}
      <span v-if="isFinal">
        · Lần làm: {{ attempts }}<span v-if="attempts > 2"> (hướng dẫn tối đa 2 lần; không cưỡng chế)</span>
      </span>
      <button v-if="done" type="button" class="rdm-retry" @click="retry">Làm lại</button>
    </div>
  </div>
</template>
