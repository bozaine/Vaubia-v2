import React, { createContext, useState, useContext } from 'react'

const I18nContext = createContext({ lang: 'fr', toggleLang: () => {} })

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState('fr')
  const toggleLang = () => setLang(prev => (prev === 'fr' ? 'en' : 'fr'))
  return (
    <I18nContext.Provider value={{ lang, toggleLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
