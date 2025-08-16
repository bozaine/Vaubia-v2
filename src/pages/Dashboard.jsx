import React from 'react'
export default function Dashboard(){
  return (
    <main className="hero">
      <h2>Tableau de bord</h2>
      <div className="grid3">
        <div className="card"><strong>Niveau de sécurité</strong><div style={{height:120}}>92/100</div></div>
        <div className="card"><strong>Tentatives détectées</strong><div style={{height:120}}>37</div></div>
        <div className="card"><strong>Bloquées</strong><div style={{height:120}}>36</div></div>
      </div>
    </main>
  )
}
