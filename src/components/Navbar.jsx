import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  const [show, setShow] = useState(false)
  const { t, lang, setLang } = useI18n()

  return (
    <div className="header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/logo.svg" alt="Vaubia" /><span>Vaubia</span>
        </div>
        <div className="nav">
          <div className="search-wrap">
            <button className="search-btn" aria-label="Rechercher" onClick={()=>setShow(s=>!s)}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <input className="search-input" style={{display: show ? 'block':'', width: show? '340px':''}} placeholder="Rechercher…" />
          </div>
          <button className="hamb" aria-haspopup="true" aria-expanded={open} onClick={()=>setOpen(v=>!v)} aria-label="Menu">
            <span/>
          </button>
          {open && (
            <nav className="drawer" onMouseLeave={()=>setOpen(false)}>
              <Link to="/" onClick={()=>setOpen(false)}>Accueil</Link>
              <Link to="/pricing" onClick={()=>setOpen(false)}>{t('pricing')}</Link>
              <Link to="/login" onClick={()=>setOpen(false)}>{t('login')}</Link>
              <Link to="/signup" onClick={()=>setOpen(false)}>{t('signup')}</Link>
              <Link to="/dashboard" onClick={()=>setOpen(false)}>{t('dashboard')}</Link>
              <Link to="/settings" onClick={()=>setOpen(false)}>{t('settings')}</Link>
              <Link to="/contact" onClick={()=>setOpen(false)}>{t('contact')}</Link>
              <Link to="/mentions-legales" onClick={()=>setOpen(false)}>Mentions légales</Link>
              <Link to="/politique-confidentialite" onClick={()=>setOpen(false)}>Confidentialité</Link>
              <Link to="/cookies" onClick={()=>setOpen(false)}>Cookies</Link>
              <div style={{display:'flex', gap:6, marginTop:6}}>
                <button className="btn" onClick={()=>setLang('fr')}>FR</button>
                <button className="btn" onClick={()=>setLang('en')}>EN</button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </div>
  )
}
