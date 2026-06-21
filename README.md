# FRAPPATO TRAIL

Landing page partner-first dedicata alla rete territoriale FRAPPATO TRAIL nella Sicilia sud-orientale.

## Requisiti

- Node.js 20.x o superiore
- npm 10.x oppure pnpm 9.x

## Installazione locale

```bash
npm install
npm run dev
```

Aprire `http://localhost:3000`.

Per usare la porta 3003:

```bash
npm run dev -- --port 3003
```

## Controlli

```bash
npm run build
npm run lint
```

## Struttura

```text
Frappato-Project/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── PartnerLanding.tsx
├── lib/
│   └── route-data.ts
├── public/
│   ├── images/
│   └── video/
├── .eslintrc.json
├── .gitignore
├── ASSET-MANIFEST.md
├── FILE-MANIFEST.md
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Pubblicazione su GitHub

Decomprimere lo ZIP e caricare nella root della repository `Frappato-Project` i file e le cartelle contenuti. Non caricare lo ZIP come unico file.

Da terminale:

```bash
git init
git branch -M main
git remote add origin https://github.com/USERNAME/Frappato-Project.git
git add .
git commit -m "Initial FRAPPATO TRAIL landing"
git push -u origin main
```

Se la repository contiene già un commit, clonarla prima e copiare al suo interno il contenuto della cartella esportata.

## Impostazioni Vercel

- Framework Preset: `Next.js`
- Root Directory: `./`
- Install Command: lasciare il valore automatico
- Build Command: `npm run build`
- Output Directory: lasciare vuoto, perché Next.js viene rilevato automaticamente
- Development Command: `npm run dev`
- Node.js Version: `20.x`

Non impostare `out` o `.next-frappato` come Output Directory.

## Contatti

Sefora Pepi  
Creative & Brand Developer  
hello@seforapepi.it
