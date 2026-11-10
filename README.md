# 🐾 PawCoach

PawCoach helps dog owners train their dogs with simple, step-by-step training flows.

## Features (planned)

### Phase 1: Dog profile
- **Add Dog** form: name, age, breed
- Save the dog in the browser (localStorage)
- **My Dog** page showing the dog's profile

### Phase 2: Training flows
- **Training** page listing training flows:
    - 🚽 Potty training
    - 🪑 Sit
    - ✋ Stay
    - 📣 Come (recall)
    - 🦮 Leash walking
    - 🏠 Crate training
- Each flow opens step-by-step instructions

### Phase 3: Progress
- Mark steps and flows as done
- Show progress for each dog

### Later
- Multiple dogs
- User accounts and a backend
- Reminders
- AI training coach
- Mobile app

## Tech stack

- [React](https://react.dev) + TypeScript
- [Vite](https://vite.dev)
- ESLint + Prettier
- localStorage for data (for now)

## Getting started

Requires **Node 22.12+** (see `.nvmrc`).

```bash
nvm use          # switch to the right Node version
npm install      # install dependencies
npm run dev      # start the app at http://localhost:5173
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Check code with ESLint |
| `npm run format` | Format code with Prettier |

## Project structure

```
src/
├── pages/        Full screens (AddDogPage, TrainingPage, ...)
├── components/   Reusable UI pieces
├── data/         Static data (breeds, training flows)
├── types/        TypeScript types
├── utils/        Helpers (e.g. localStorage)
├── App.tsx       Main app and routing
├── main.tsx      Entry point
└── index.css     Global styles
```