import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { I18nProvider, useI18n } from './i18n'

const Home = () => {
  const { lang, toggleLang } = useI18n()
  return (
    <div style={{padding:'2rem', fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
      <header style={{display:'flex', gap:'1rem', alignItems:'center', justifyContent:'space-between'}}>
        <nav style={{display:'flex', gap:'1rem'}}>
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/login">Login</Link>
        </nav>
        <button onClick={toggleLang} aria-label="toggle language">
          {lang === 'fr' ? 'FR' : 'EN'}
        </button>
      </header>
      <h1>{lang === 'fr' ? 'Bonjour 👋' : 'Hello 👋'}</h1>
      <p>{lang === 'fr' ? 'Build Vercel OK — i18n minimal' : 'Build Vercel OK — minimal i18n'}</p>
    </div>
  )
}

const Pricing = () => <div style={{padding:'2rem'}}>Pricing page</div>
const Login = () => <div style={{padding:'2rem'}}>Login page</div>

export default function App(){
  return (
    <I18nProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </I18nProvider>
  )
}
