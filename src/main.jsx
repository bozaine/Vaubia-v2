import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import { I18nProvider, useI18n } from './i18n'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './styles.css'
import { auth } from './auth'

function Guard({ children }){
  return auth.isAuthed() ? children : <Navigate to="/login" replace />
}

function Nav(){
  const { lang, setLang } = useI18n()
  return (
    <header className="nav">
      <Link to="/" className="brand">Vaubia</Link>
      <nav>
        <Link to="/">{lang==='fr'?'Accueil':'Home'}</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">{lang==='fr'?'Connexion':'Login'}</Link>
        <select value={lang} onChange={(e)=>setLang(e.target.value)}>
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
      </nav>
    </header>
  )
}

function App(){
  return (
    <I18nProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Guard><Dashboard/></Guard>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  )
}

createRoot(document.getElementById('root')).render(<App />)
