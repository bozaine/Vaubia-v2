import { safeStorage } from './safeStorage'
const KEY='session'
export const auth = {
  login(id, pwd){
    if(id==='admin' && pwd==='admin'){
      const s = JSON.stringify({user:{id:'admin'}})
      safeStorage.set(KEY, s)
      return { ok:true }
    }
    return { ok:false, error:'Invalid credentials' }
  },
  logout(){ safeStorage.set(KEY, '') },
  get(){
    const raw = safeStorage.get(KEY, '')
    try { return JSON.parse(raw) } catch { return null }
  },
  isAuthed(){ return !!auth.get()?.user }
}
