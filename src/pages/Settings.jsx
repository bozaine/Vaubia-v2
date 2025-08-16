import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import { useI18n } from '../i18n'

export default function Settings(){
  const [dark,setDark]=useState(true)
  const { lang, setLang } = useI18n()
  return (
    <div>
      <Navbar/>
      <main className="container">
        <h1>Réglages</h1>
        <div className="grid grid-2">
          <div className="card">
            <h3>Apparence</h3>
            <label style={{display:'flex', alignItems:'center', gap:8}}>
              <input type="checkbox" checked={dark} onChange={()=>setDark(v=>!v)} /> Mode sombre (démo)
            </label>
          </div>
          <div className="card">
            <h3>Langue</h3>
            <select value={lang} onChange={e=>setLang(e.target.value)}>
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  )
}
