export const safeStorage = {
  get(key, fallback=null){
    if (typeof window === 'undefined') return fallback
    try { return window.localStorage.getItem(key) ?? fallback } catch { return fallback }
  },
  set(key, value){
    if (typeof window === 'undefined') return
    try { window.localStorage.setItem(key, value) } catch {}
  }
}
