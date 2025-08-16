import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { genMetrics } from '../mocks/data.js'
import { useNavigate } from 'react-router-dom'

function LineChart({ series }){
  return (
    <svg viewBox="0 0 100 40" style={{width:'100%', height:120}}>
      <polyline fill="none" stroke="#60a5fa" strokeWidth="2" points={series.map(p=>`${p.x*5},${40-p.y}`).join(' ')} />
    </svg>
  )
}

export default function Dashboard(){
  const [m, setM] = useState(genMetrics())
  const nav = useNavigate()
  useEffect(()=>{ const id=setInterval(()=> setM(genMetrics(Date.now())), 10000); return ()=>clearInterval(id) },[])
  function logout(){ localStorage.removeItem('vaubia_user'); nav('/login') }
  return (
    <div>
      <Navbar/>
      <main className="container">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h1>Tableau de bord</h1>
          <div style={{display:'flex', gap:10}}>
            <button className="btn" onClick={()=>setM(genMetrics(Date.now()))}>Rafraîchir</button>
            <button className="btn ghost" onClick={logout}>Déconnexion</button>
          </div>
        </div>
        <div className="grid grid-2">
          <div className="card"><strong>Niveau de sécurité</strong><div style={{fontSize:42,fontWeight:800,color:'#5eead4'}}>{m.score}%</div><small>Plus c’est haut, mieux c’est.</small></div>
          <div className="card"><strong>Tentatives détectées</strong><div style={{fontSize:36,color:'#9fd1ff',fontWeight:800}}>{m.detected}</div><small>Bloquées : {m.blocked} • Critiques : {m.critical}</small></div>
          <div className="card"><strong>Tendance</strong><LineChart series={m.series}/></div>
          <div className="card"><strong>Alertes récentes</strong><p style={{opacity:.8}}>Aucune alerte critique aujourd’hui.</p></div>
        </div>
      </main>
    </div>
  )
}
