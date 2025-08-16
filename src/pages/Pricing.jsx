import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar.jsx'

export default function Pricing(){
  const plans=[
    { name:'Mensuel', price:'29 € / mois', note:'Annulable à tout moment', features:['Monitoring multi-comptes','Alertes temps réel','Rapport hebdo']},
    { name:'Annuel', price:'24 € / mois', note:'-17% • facturé 288 €', features:['Tout du mensuel','Priorité support','Modèles & docs inclus']},
    { name:'Entreprise', price:'Sur devis', note:'Support dédié', features:['SLA & SSO','Accès API','Intégrations avancées']}
  ]
  const [idx,setIdx]=useState(0)
  const track=useRef(null)
  useEffect(()=>{ if(track.current) track.current.style.transform = `translateX(${-idx*100}%)` },[idx])
  useEffect(()=>{
    const el = track.current; if(!el) return
    let start=0, cur=0, dragging=false
    const down = e=>{ dragging=true; start=(e.touches?e.touches[0].clientX:e.clientX) }
    const move = e=>{ if(!dragging) return; const x=(e.touches?e.touches[0].clientX:e.clientX); cur=x-start; el.style.transition='none'; el.style.transform=`translateX(${cur - idx*100}%)` }
    const up = ()=>{ if(!dragging) return; dragging=false; el.style.transition=''; if(cur<-30) setIdx(i=>(i+1)%plans.length); else if(cur>30) setIdx(i=>(i-1+plans.length)%plans.length); else el.style.transform=`translateX(${-idx*100}%)`; cur=0 }
    el.addEventListener('mousedown',down); window.addEventListener('mousemove',move); window.addEventListener('mouseup',up)
    el.addEventListener('touchstart',down,{passive:true}); el.addEventListener('touchmove',move,{passive:true}); el.addEventListener('touchend',up)
    return ()=>{ el.removeEventListener('mousedown',down); window.removeEventListener('mousemove',move); window.removeEventListener('mouseup',up); el.removeEventListener('touchstart',down); el.removeEventListener('touchmove',move); el.removeEventListener('touchend',up) }
  }, [idx])
  return (
    <div>
      <Navbar/>
      <main className="container">
        <h1>Tarifs</h1>
        <p style={{color:'#9fb1c7'}}>Faites glisser d’un geste pour explorer les offres.</p>
        <div className="carousel">
          <div className="carousel-track" ref={track}>
            {plans.map((p,i)=>(
              <div key={i} style={{minWidth:'100%', padding:'8px'}}>
                <article className="card" style={{borderRadius:'18px'}}>
                  <span className="badge">{p.note}</span>
                  <h3>{p.name}</h3>
                  <div className="price" style={{fontSize:42, fontWeight:800, margin:'8px 0 16px'}}>{p.price}</div>
                  <ul>{p.features.map((f,ix)=>(<li key={ix} style={{color:'#9fb1c7', marginBottom:6}}>✓ {f}</li>))}</ul>
                  <div style={{display:'flex', gap:10}}>
                    <a className="btn primary" href="/signup">Souscrire</a>
                    <a className="btn ghost" href="/contact">Contact</a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
