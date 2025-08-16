import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Pricing from './pages/Pricing.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Settings from './pages/Settings.jsx'
import Contact from './pages/Contact.jsx'
import Mentions from './pages/Legal/Mentions.jsx'
import Confidentialite from './pages/Legal/Confidentialite.jsx'
import CookiesPage from './pages/Legal/Cookies.jsx'

function Protected({children}){
  const loc = useLocation()
  const authed = localStorage.getItem('vaubia_user')
  if(!authed) return <Navigate to="/login" state={{ from: loc }} replace />
  return children
}

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Protected><Dashboard/></Protected>} />
      <Route path="/settings" element={<Protected><Settings/></Protected>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/mentions-legales" element={<Mentions/>} />
      <Route path="/politique-confidentialite" element={<Confidentialite/>} />
      <Route path="/cookies" element={<CookiesPage/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
