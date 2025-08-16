// src/i18n/index.js
import React, { createContext, useContext, useMemo, useEffect, useState } from 'react';

const LANG_KEY = 'vaubia.lang';
const defaultLang = 'fr';

// Import your existing dictionaries
import fr from './fr.json';
import en from './en.json';
const DICTS = { fr, en };

// Safe accessors to avoid build-time crashes on Vercel (no window/localStorage during SSR/build)
const safeGet = () => {
  try {
    if (typeof window !== 'undefined') return localStorage.getItem(LANG_KEY);
  } catch (_) {}
  return null;
};
const safeSet = (v) => {
  try {
    if (typeof window !== 'undefined') localStorage.setItem(LANG_KEY, v);
  } catch (_) {}
};

const I18nContext = createContext({ t: (k) => k, lang: defaultLang, setLang: () => {} });

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);

  // Read from localStorage only on client after mount
  useEffect(() => {
    const stored = safeGet();
    if (stored && DICTS[stored]) setLang(stored);
  }, []);

  // Persist when language changes (client only)
  useEffect(() => {
    safeSet(lang);
  }, [lang]);

  const value = useMemo(() => {
    const dict = DICTS[lang] || DICTS[defaultLang];
    const t = (key, fallback) => key.split('.').reduce((o, p) => (o && o[p] != null ? o[p] : null), dict) ?? (fallback ?? key);
    return { t, lang, setLang };
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
