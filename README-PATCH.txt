
VAUBIA – PATCH ZIP (Vercel build fix)

Ce ZIP contient uniquement :
• src/i18n/index.js  → sécurise localStorage/window pour éviter l’erreur Vercel « vite:build-import-analysis ».
• vercel.json       → verrouille les commandes build/install et le dossier de sortie (dist).

Comment appliquer (mobile OK) :
1) Sur GitHub → ton repo → add file → Upload files.
2) Glisse ce zip OU dézippe et téléverse les DEUX fichiers en respectant les dossiers :
   - src/i18n/index.js (remplace l’existant)
   - vercel.json (à la racine)
3) Commit → Vercel redeploy.
4) Si un autre fichier lit `window`/`localStorage` AU NIVEAU MODULE (pas dans useEffect),
   applique la même technique : protéger avec `typeof window !== 'undefined'` et déplacer dans `useEffect`.

Optionnel :
• Assure-toi que package.json contient les scripts :
    "scripts": { "dev":"vite", "build":"vite build", "preview":"vite preview" }
  et, si besoin :
    "engines": { "node": "18.x" }

Besoin d’aide ? Dis-moi le prochain log d’erreur exact et je te renvoie un autre patch.
