import React from 'react'
import Navbar from '../components/Navbar.jsx'
import { useNavigate } from 'react-router-dom'

export default function Signup(){
  const nav=useNavigate()
  function submit(e){ e.preventDefault(); nav('/pricing') }
  return (
    <div>
      <Navbar/>
      <main className="container">
        <h1>Inscription</h1>
        <form onSubmit={submit} className="card" style={{display:'grid', gap:12, maxWidth:420}}>
          <label>Email<input required type="email" /></label>
          <label>Mot de passe<input required type="password" /></label>
          <button className="btn primary">Créer le compte</button>
        </form>
      </main>
    </div>
  )
}
