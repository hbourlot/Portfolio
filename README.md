# Portfolio

My personal portfolio, built as a chat. Visitors ask questions in English or Portuguese and get answers I wrote myself, so it never makes things up.

Live: https://hbourlot.github.io/Portfolio/

## Tech Stack

- React, TypeScript, Vite
- React Router
- Tailwind CSS
- Python + sentence-transformers - still implementing

## How the chat works

`src/data/qa.json` holds every answer, each with 5 phrasings per language.

**Now:** `src/chat/findAnswer.ts` matches the visitor's question against those phrasings exactly (ignoring case and punctuation), or shows a fallback.

**In progress: semantic search**

1. `python/build_index.py` encodes every phrasing with `paraphrase-multilingual-MiniLM-L12-v2` and saves the vectors to `src/assets/embeddings.json`.
2. In the browser, the same model will encode the visitor's question, compare it against every stored vector (cosine similarity), and show the best answer, or the fallback if nothing scores above the threshold.

`python/evaluate.py` checks the matching against 45 unseen questions, including 10 off-topic ones, and prints accuracy at several thresholds.

## Getting Started

```bash
npm install
npm run dev
```

Rebuild the search index after editing `qa.json`:

```bash
pip install sentence-transformers
python3 python/build_index.py
python3 python/evaluate.py
```

## Scripts

- `npm run dev` - start local development server
- `npm run build` - type-check and build to `dist/`
- `npm run lint` - run ESLint
- `npm run preview` - preview the production build locally
- `npm run deploy` - build and publish `dist/` to GitHub Pages

## Project Structure

```text
python/          build_index.py, evaluate.py (local only)
src/
  assets/        avatar, embeddings.json
  chat/          findAnswer.ts (question matching)
  components/    Sidebar, ChatThread, Message, ProjectCard, ...
  context/
  data/          qa.json, projects
  i18n/          English / Portuguese
  pages/         Home, About, Projects, Journey, Contact, Chat
```

## Deployment

Deployed to GitHub Pages from the `gh-pages` branch:

```bash
npm run deploy
```

The Vite `base` is set to `/Portfolio/` to match the repository name.
