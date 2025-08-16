import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import fr from './fr.json'
import en from './en.json'
const dict = { fr, en }
const I18n = createContext({ t:(k)=>k, lang:'fr', setLang:()=>{} })
export const useI18n = () => useContext(I18n)
export function I18nProvider({ children }){
  const [lang,setLang] = useState(localStorage.getItem('lang') || 'fr')
  useEffect(()=>{ localStorage.setItem('lang', lang) }, [lang])
  const value = useMemo(()=>({ lang, setLang, t:(k)=> (dict[lang] && dict[lang][k]) || k }), [lang])
  return <I18n.Provider value={value}>{children}</I18n.Provider>
}
