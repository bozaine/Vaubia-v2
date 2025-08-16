import React, { useEffect, useMemo, useState } from "react";
import React, { createContext, useContext, useMemo, useEffect, useState } from 'react'
import { safeStorage } from '../safeStorage'

const dict = {
  fr: {
    hero_title: "Simulez, détectez et décidez en quelques secondes.",
    cta_start: "Commencer",
    cta_demo: "Voir une démo",
    login: "Connexion",
    logout: "Déconnexion",
    dashboard: "Tableau de bord"
  },
  en: {
    hero_title: "Simulate, detect and decide in seconds.",
    cta_start: "Get started",
    cta_demo: "See a demo",
    login: "Login",
    logout: "Logout",
    dashboard: "Dashboard"
  }
}

const I18n = createContext({ lang: 'fr', t: (k)=>k, setLang: ()=>{} })

export function I18nProvider({ children }){
  const [lang, setLang] = useState(()=> safeStorage.get('lang','fr'))

  useEffect(()=>{ safeStorage.set('lang', lang) }, [lang])

  const value = useMemo(()=> ({
    lang,
    setLang,
    t: (key)=> dict[lang]?.[key] ?? key
  }), [lang])

  return <I18n.Provider value={value}>{children}</I18n.Provider>
}

export const useI18n = ()=> useContext(I18n)
