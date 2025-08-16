import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Topics from '../components/Topics.jsx'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'

export default function Home(){
  const { t } = useI18n()
  return (
    <div>
      <Navbar/>
      <main className="container">
        <section className="hero" aria-label="Présentation">
          <span className="badge" style={{opacity:.8}}>Protégez l’essentiel</span>
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_sub')}</p>
          <div style={{display:'flex', gap:12, marginTop:10}}>
            <Link className="btn primary" to="/signup">{t('start')}</Link>
            <Link className="btn ghost" to="/pricing">{t('pricing')}</Link>
          </div>
          <Topics/>
        </section>
        <div style={{height:24}}/>
      </main>
      <footer className="container footer">
        <small>© 2025 Vaubia — Protégez l’essentiel</small>
      </footer>
    </div>
  )
}
