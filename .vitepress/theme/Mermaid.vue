<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{ encoded: string }>()
const code = computed(() => decodeURIComponent(props.encoded))

const svg = ref('')
const error = ref('')
const scale = ref(1)
const baseWidth = ref(0)
const fullscreen = ref(false)
const host = ref<HTMLElement | null>(null)
const uid = 'mmd-' + Math.random().toString(36).slice(2, 10)
let observer: MutationObserver | null = null
let counter = 0

const MIN = 0.3
const MAX = 4
const clamp = (v: number) => Math.min(MAX, Math.max(MIN, v))

function readWidth(markup: string): number {
  const doc = new DOMParser().parseFromString(markup, 'image/svg+xml')
  const el = doc.documentElement
  const vb = (el.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number)
  if (vb.length === 4 && vb[2] > 0) return vb[2]
  const w = parseFloat(el.getAttribute('width') || '0')
  return w > 0 ? w : 800
}

// SVG labels do not interpret HTML; keep <br/> and drop other tags
function stripHtml(s: string) {
  return s.replace(/<(?!br\s*\/?>)\/?[a-zA-Z][^>]*>/g, '')
}

async function render() {
  try {
    const mermaid = (await import('mermaid')).default
    const dark = document.documentElement.classList.contains('dark')
    // Đo chữ bằng đúng phông của trang và chỉ dựng sau khi phông đã tải,
    // nếu không các hộp sẽ nhỏ hơn chữ và bị cắt.
    if (document.fonts?.ready) await document.fonts.ready
    const family = getComputedStyle(document.body).fontFamily
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: dark ? 'dark' : 'default',
      fontFamily: family,
      themeVariables: { fontFamily: family },
      // Nhãn SVG thuần (không HTML): chữ được đo và vẽ cùng một cách nên hộp luôn đủ lớn.
      // (Từ mermaid 11, htmlLabels đặt ở cấp gốc; flowchart.htmlLabels đã lỗi thời.)
      htmlLabels: false,
      flowchart: { htmlLabels: false, useMaxWidth: false, padding: 14, wrappingWidth: 360 },
    })
    const out = await mermaid.render(`${uid}-${counter++}`, stripHtml(code.value))
    svg.value = out.svg
    baseWidth.value = readWidth(out.svg)
    error.value = ''
    await nextTick()
    fit()
  } catch (e: any) {
    svg.value = ''
    error.value = String(e?.message || e)
  }
}

function fit() {
  const box = host.value
  if (!box || !baseWidth.value) return
  const avail = box.clientWidth - 24
  scale.value = clamp(Math.min(1, avail / baseWidth.value))
}

function zoomIn() { scale.value = clamp(scale.value * 1.25) }
function zoomOut() { scale.value = clamp(scale.value / 1.25) }
function onWheel(ev: WheelEvent) {
  if (!ev.ctrlKey && !ev.metaKey) return
  ev.preventDefault()
  scale.value = clamp(scale.value * (ev.deltaY < 0 ? 1.1 : 1 / 1.1))
}

// Kéo để di chuyển (pan) bằng chuột hoặc cảm ứng.
let drag: { x: number; y: number; left: number; top: number; el: HTMLElement } | null = null
function down(ev: PointerEvent) {
  const el = ev.currentTarget as HTMLElement
  drag = { x: ev.clientX, y: ev.clientY, left: el.scrollLeft, top: el.scrollTop, el }
  el.setPointerCapture(ev.pointerId)
}
function move(ev: PointerEvent) {
  if (!drag) return
  drag.el.scrollLeft = drag.left - (ev.clientX - drag.x)
  drag.el.scrollTop = drag.top - (ev.clientY - drag.y)
}
function up() { drag = null }

function blobUrl() {
  const text = '<?xml version="1.0" encoding="UTF-8"?>' + String.fromCharCode(10) + svg.value
  return URL.createObjectURL(new Blob([text], { type: 'image/svg+xml' }))
}
function openSeparate() {
  const url = blobUrl()
  window.open(url, '_blank', 'noopener')
  setTimeout(() => URL.revokeObjectURL(url), 60000)
}
function download() {
  const a = document.createElement('a')
  a.href = blobUrl()
  a.download = 'so-do.svg'
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 1000)
}
function onKey(ev: KeyboardEvent) { if (ev.key === 'Escape') fullscreen.value = false }

onMounted(() => {
  render()
  observer = new MutationObserver(() => render())
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <figure class="mmd">
    <div v-if="svg" class="mmd-bar" role="toolbar" aria-label="Điều khiển sơ đồ">
      <button type="button" title="Thu nhỏ" aria-label="Thu nhỏ" @click="zoomOut">−</button>
      <span class="mmd-pct">{{ Math.round(scale * 100) }}%</span>
      <button type="button" title="Phóng to" aria-label="Phóng to" @click="zoomIn">+</button>
      <button type="button" title="Vừa khung" @click="fit">Vừa khung</button>
      <button type="button" title="Xem toàn màn hình" @click="fullscreen = true">Toàn màn hình</button>
      <button type="button" title="Mở sơ đồ trong tab mới" @click="openSeparate">Tab mới</button>
      <button type="button" title="Tải về tệp SVG" @click="download">Tải SVG</button>
    </div>
    <div
      v-if="svg"
      ref="host"
      class="mmd-view"
      @wheel="onWheel"
      @pointerdown="down"
      @pointermove="move"
      @pointerup="up"
      @pointercancel="up"
    >
      <div class="mmd-svg" :style="{ width: baseWidth * scale + 'px' }" v-html="svg" />
    </div>
    <div v-else-if="!error" ref="host" class="mmd-loading">Đang dựng sơ đồ…</div>
    <div v-if="error" class="mmd-error">
      <p>Không dựng được sơ đồ: {{ error }}</p>
      <pre><code>{{ code }}</code></pre>
    </div>
    <details class="mmd-src">
      <summary>Xem mã nguồn sơ đồ</summary>
      <pre><code>{{ code }}</code></pre>
    </details>

    <Teleport to="body">
      <div v-if="fullscreen" class="mmd-modal" role="dialog" aria-modal="true" @click.self="fullscreen = false">
        <div class="mmd-modal-bar">
          <button type="button" aria-label="Thu nhỏ" @click="zoomOut">−</button>
          <span class="mmd-pct">{{ Math.round(scale * 100) }}%</span>
          <button type="button" aria-label="Phóng to" @click="zoomIn">+</button>
          <button type="button" @click="openSeparate">Tab mới</button>
          <button type="button" @click="download">Tải SVG</button>
          <button type="button" class="mmd-close" @click="fullscreen = false">Đóng (Esc)</button>
        </div>
        <div
          class="mmd-modal-view"
          @wheel="onWheel"
          @pointerdown="down"
          @pointermove="move"
          @pointerup="up"
          @pointercancel="up"
        >
          <div class="mmd-svg" :style="{ width: baseWidth * scale + 'px' }" v-html="svg" />
        </div>
      </div>
    </Teleport>
  </figure>
</template>
