# SOOSMART GROUP — Site Vitrine

Site vitrine professionnel Next.js 14 pour SOOSMART GROUP — Experts en Réseaux & Cybersécurité.

## Stack Technique

| Technologie | Usage |
|---|---|
| **Next.js 14** | App Router, SSR, SSG |
| **TypeScript** | Typage strict |
| **Tailwind CSS** | Design system + utilitaires |
| **next-intl** | Internationalisation FR/EN |
| **Framer Motion** | Animations |
| **React Hook Form + Zod** | Formulaire contact validé |
| **Resend** | Envoi d'emails |
| **Zustand** | State admin persistant |

## Design System

- **Palette** : Dark `#080C14` + Cyan `#00E5FF` + Vert néon `#39FF14`
- **Typographie** : `Syne` (display) + `DM Sans` (body) + `JetBrains Mono` (code)
- **Effets** : Glassmorphism, grille hexagonale, glow effects, animations scanline

## Pages

| Route | Description |
|---|---|
| `/[locale]` | Page d'accueil avec hero animé, services, formations, réalisations |
| `/[locale]/services` | Catalogue complet des 6 services |
| `/[locale]/formations` | 10 formations avec filtre par catégorie |
| `/[locale]/realisations` | Portfolio avec filtre par type |
| `/[locale]/a-propos` | Mission, vision, valeurs, équipe |
| `/[locale]/contact` | Formulaire fonctionnel + coordonnées |
| `/[locale]/admin` | Backoffice protégé (gestion réalisations) |

## Installation

```bash
# 1. Cloner et installer les dépendances
npm install

# 2. Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos clés

# 3. Lancer en développement
npm run dev

# 4. Build de production
npm run build
npm start
```

## Variables d'environnement

```bash
# Obligatoire pour les emails
RESEND_API_KEY=re_xxxx

# Mot de passe admin (à personnaliser !)
NEXT_PUBLIC_ADMIN_PASSWORD=votre_mot_de_passe_securise
```

## Déploiement (Vercel — recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

Configurer les variables d'environnement dans le dashboard Vercel.

## Admin Panel

Accessible via `/[locale]/admin`

Permet de :
- **Ajouter** une réalisation (titre FR/EN, client, description, tags, catégorie, année)
- **Supprimer** une réalisation
- **Visualiser** les statistiques

Le mot de passe est défini dans `NEXT_PUBLIC_ADMIN_PASSWORD`.

> ⚠️ Pour la production, utiliser une auth plus robuste (NextAuth.js).

## Ajouter une réalisation manuellement

Éditer `lib/data/index.ts`, tableau `realisations` :

```typescript
{
  id: "mon-projet",
  titleFr: "Mon Projet",
  titleEn: "My Project",
  category: "network", // network | security | voip | cloud | formation
  client: "Nom du client",
  descFr: "Description en français...",
  descEn: "Description in English...",
  tags: ["Cisco", "VLAN", "QoS"],
  year: "2024",
  featured: true, // apparaît en page d'accueil
},
```

## Internationalisation

Éditer les fichiers de traduction :
- `messages/fr.json` — Français
- `messages/en.json` — Anglais

## Structure du projet

```
soosmart/
├── app/
│   ├── [locale]/          # Pages localisées
│   │   ├── page.tsx       # Accueil
│   │   ├── services/
│   │   ├── formations/
│   │   ├── realisations/
│   │   ├── a-propos/
│   │   ├── contact/
│   │   └── admin/
│   ├── api/contact/       # API email
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                # Button, Card, Badge, SectionHeader
│   ├── layout/            # Navbar, Footer
│   └── sections/          # HeroSection, ServicesSection, etc.
├── lib/
│   ├── data/index.ts      # Données statiques
│   ├── store.ts           # Zustand admin store
│   ├── i18n.ts            # Config next-intl
│   └── utils.ts
├── messages/
│   ├── fr.json
│   └── en.json
├── tailwind.config.ts     # Design tokens
└── next.config.ts
```
