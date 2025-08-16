import React from 'react'
import Navbar from '../components/Navbar.jsx'
export default function Contact(){
  return (
    <div>
      <Navbar/>
      <main className="container">
        <h1>Contact</h1>
        <form className="card" onSubmit={(e)=>e.preventDefault()} style={{display:'grid', gap:12, maxWidth:520}}>
          <label>Nom<input required/></label>
          <label>Email<input type="email" required/></label>
          <label>Message<textarea rows="5" required/></label>
          <button className="btn primary">Envoyer</button>
        </form>
      </main>
    </div>
  )
}
