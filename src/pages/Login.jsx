import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../auth'
export default function Login(){
  const nav = useNavigate()
  const [id, setId] = useState('admin')
  const [pw, setPw] = useState('admin')
  const [err, setErr] = useState('')
  const submit = (e)=>{
    e.preventDefault()
    const res = auth.login(id, pw)
    if(res.ok) nav('/dashboard')
    else setErr(res.error)
  }
  return (
    <main className="hero">
      <h2>Connexion</h2>
      <form onSubmit={submit} className="card" style={{maxWidth:440}}>
        <label>Identifiant<input value={id} onChange={e=>setId(e.target.value)} /></label>
        <label>Mot de passe<input type="password" value={pw} onChange={e=>setPw(e.target.value)} /></label>
        {err && <p style={{color:'#f88'}}>{err}</p>}
        <button className="btn" type="submit">Se connecter</button>
      </form>
    </main>
  )
}
