import React from 'react'
export default function Topics(){
  const items=[
    { icon:'⭐', title:'Valeur', text:'Visibilité claire et priorisée.' },
    { icon:'🔒', title:'Sécurité', text:'Phishing & intrusions bloqués.' },
    { icon:'📜', title:'Conformité', text:'RGPD & audit simplifiés.' }
  ]
  return (
    <div className="topics" role="list">
      {items.map((it,i)=> (
        <article className="topic" role="listitem" key={i}>
          <h4>{it.icon} {it.title}</h4>
          <p>{it.text}</p>
        </article>
      ))}
    </div>
  )
}
