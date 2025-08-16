import React from 'react'
import { useI18n } from '../i18n'
export default function Home(){
  const { t } = useI18n()
  return (
    <main className="hero">
      <h1>{t('hero_title')}</h1>
      <p>Surveillez vos comptes, détectez les fuites, recevez des alertes et suivez votre conformité simplement.</p>
      <div className="cta">
        <button className="btn">Commencer</button>
        <button className="btn" style={{background:'#0c2230'}}>Voir une démo</button>
      </div>
      <section className="grid3">
        <div className="card"><h3>Valeur</h3><p>Score de sécurité unifié et rapports clairs.</p></div>
        <div className="card"><h3>Sécurité</h3><p>Blocage des tentatives & phishing en temps réel.</p></div>
        <div className="card"><h3>Conformité</h3><p>Journal d’audit & modèles prêts à l’emploi.</p></div>
      </section>
    </main>
  )
}
