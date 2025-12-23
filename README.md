# Ristorante Aura — Next.js + Tailwind (skeleton)

Questo repository contiene uno starter minimal per un sito ristorante elegante (Next.js + Tailwind).
Include: configurazione Tailwind, esempio di Hero, API route mock per prenotazioni e struttura consigliata.

## Requisiti
- Node.js (>=18)
- npm o yarn

## Installazione locale
1. Estrai lo zip:
   ```bash
   unzip ristorante-starter.zip -d .
   cd ristorante-starter
   ```
2. Installa dipendenze:
   ```bash
   npm install
   # oppure
   # yarn
   ```
3. Avvia in sviluppo:
   ```bash
   npm run dev
   ```
   Apri http://localhost:3000

## Build e produzione
```bash
npm run build
npm run start
```

## Note implementative
- Integrare Cloudinary/Imgix per immagini ottimizzate.
- Implementare integrazione SendGrid per email di conferma e salvare le prenotazioni in DB o CMS (Sanity).
- Aggiungere schemi Sanity sotto `/studio` se si sceglie Sanity come headless CMS.
- Aggiornare `package.json` versioni Next/React se necessario.

## Deploy
Consigliato: Vercel. Collegare il repo GitHub e deploy automatico. Impostare variabili d'ambiente per API keys (SENDGRID_API_KEY, SANITY_TOKEN, etc.)

