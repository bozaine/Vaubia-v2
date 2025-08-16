import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Login(){
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const [err,setErr]=useState('')
  const nav=useNavigate()
  const loc=useLocation()
  function submit(e){
    e.preventDefault()
    if(email==='admin' && pass==='admin'){
      localStorage.setItem('vaubia_user', JSON.stringify({ email, role:'admin' }))
      const next = (loc.state && loc.state.from && loc.state.from.pathname) || '/dashboard'
      nav(next); return
    }
    setErr('Identifiants invalides (essayez admin / admin)')
  }
  return (
    <div>
      <Navbar/>
      <main className="container">
        <h1>Connexion</h1>
        <form onSubmit={submit} className="card" style={{display:'grid', gap:12, maxWidth:420}}>
          {err && <div className="badge" role="alert">{err}</div>}
          <label>Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} /></label>
          <label>Mot de passe<input required type="password" value={pass} onChange={e=>setPass(e.target.value)} /></label>
          <button className="btn primary">Se connecter</button>
          <small>Identifiants démo : admin / admin</small>
        </form>
      </main>
    </div>
  )
}
