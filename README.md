# BYLINE — Verification Training

A hands-on media literacy training ground for Filipino high school and college students. Six
interactive modules teach source verification, fake news detection, clickbait spotting, image
manipulation detection, and safe decision-making on social media — capped with a timed final
assessment.

Built with **Next.js 14 (App Router)**, **React**, **Tailwind CSS**, **Framer Motion**,
**GSAP**, and **Chart.js**.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                  Next.js App Router entry (layout, global styles, page)
components/           All interactive modules (one file per module)
lib/data.js           All content: sources, articles, headlines, scenarios, quiz, final test
public/images/        Real photos used in the Image Investigation module
```

Each module reports its completion into a shared `ProgressContext`
(`components/ProgressContext.js`), which the Learning Dashboard reads to show module
status, accuracy, quiz score, and earned badges.

## Deploying to Vercel

**Option A — via GitHub (recommended)**

1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), sign in, and import that repository.
3. Vercel auto-detects Next.js — leave the default build settings and click **Deploy**.
4. You'll get a live URL (e.g. `byline.vercel.app`) in about a minute.

**Option B — via Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts (link or create a project). Run `vercel --prod` to push to your production
URL once you're happy with a preview deployment.

No environment variables or extra configuration are required — everything runs client-side.

## Notes on the photos used

The three real photos in `public/images/` (a crowd, a Manila skyline, and a food product shot)
are used to build "spot the manipulation" comparisons for the Image Investigation module. If you
swap in your own photos, keep the same filenames (or update the paths in `lib/data.js`) and try
to keep a similar aspect ratio (~16:10) for the compare-slider to look right.
