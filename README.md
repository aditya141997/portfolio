# Portfolio — Aditya

Next.js 16 + Tailwind CSS v4 portfolio. Dark, technical, signal/pipeline theme
tying together your pharmacovigilance (SafePHV) and cardiac AI work.

## 1. Before you deploy — fill these placeholders

- `src/components/Contact.tsx` — replace the email, LinkedIn, and GitHub URLs
  (marked `TODO`).
- `src/components/Experience.tsx` — replace the TCS role title and dates
  (marked `TODO`), and tighten the bullet points to real, measurable outcomes.
- `src/components/Projects.tsx` — the three project write-ups (SafePHV,
  Cardiac_AI, fine-tuning pipeline) are drawn from your background — check
  them against what you're comfortable making public, especially anything
  proprietary to Topia Pharma. Add project links (GitHub / write-up) via a
  `link` field if you have public repos.
- Add a resume PDF at `public/resume.pdf` and point the "Resume" button in
  `src/components/Nav.tsx` to `/resume.pdf`.
- `src/app/layout.tsx` — update the `metadata` title/description if you add a
  last name or change positioning.

## 2. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 3. Deploy free on Vercel

1. Push this project to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com, sign in with GitHub (free).
3. Click **Add New → Project**, select your `portfolio` repo.
4. Leave all settings default (Vercel auto-detects Next.js) → **Deploy**.
5. You'll get a free `https://<project-name>.vercel.app` URL. Every future
   `git push` to `main` auto-deploys.
6. Optional: add a custom domain for free under Project → Settings → Domains
   (you still need to own/buy the domain itself; Vercel doesn't charge for
   attaching it).

## 4. Structure

```
src/app/            → root layout, global styles, page assembly
src/components/      → Hero, Projects, Experience, Skills, Contact, Nav, Footer
  SignalTrace.tsx    → the animated hero diagram (ECG trace → 6-agent pipeline)
```

Colors, fonts, and spacing tokens live in `src/app/globals.css` under `:root`
and `@theme inline` — change values there to restyle the whole site.
