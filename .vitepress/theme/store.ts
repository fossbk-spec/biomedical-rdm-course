// Lưu kết quả quiz trong localStorage của trình duyệt (chỉ trên máy người học).
export interface Saved {
  picks: Record<number, string>
  attempts: number
}

const storageKey = (key: string) => `rdm-quiz:${key}`

export function load(key: string): Saved {
  try {
    const v = JSON.parse(localStorage.getItem(storageKey(key)) || 'null')
    if (v) return v
  } catch {
    /* localStorage không dùng được: bắt đầu từ trạng thái trống */
  }
  return { picks: {}, attempts: 1 }
}

export function save(key: string, s: Saved) {
  try {
    localStorage.setItem(storageKey(key), JSON.stringify(s))
  } catch {
    /* bỏ qua */
  }
  // Báo cho khối kết quả tổng hợp cập nhật ngay.
  window.dispatchEvent(new CustomEvent('rdm-quiz-saved'))
}

export const LESSONS = [
  'module-1-dmp',
  'module-2-collection',
  'module-3-standards',
  'module-4-quality',
  'module-5-fair',
  'module-6-privacy-ai',
]
