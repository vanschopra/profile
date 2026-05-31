# Vanshika Chopra | Portfolio

Personal portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Typography:** Inter & Playfair Display (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## Deploy on Render

This project is configured for deployment on [Render](https://render.com) as a **Web Service**.

### Step-by-step deployment guide

#### Prerequisites

1. A [Render](https://render.com) account (free tier available)
2. This repository pushed to GitHub

#### Steps

1. **Push to GitHub** (if not already done):
   ```bash
   git remote add origin https://github.com/vanschopra/profile.git
   git branch -M main
   git push -u origin main
   ```

2. **Log in to Render** at [dashboard.render.com](https://dashboard.render.com).

3. **Create a new Web Service:**
   - Click **"New +"** → **"Web Service"**
   - Connect your GitHub account and select the `vanschopra/profile` repository
   - Or use the "Public Git Repository" option and paste: `https://github.com/vanschopra/profile`

4. **Configure the service:**
   | Setting | Value |
   |---|---|
   | **Name** | `vanshika-portfolio` |
   | **Runtime** | Node |
   | **Region** | `Oregon` (or nearest to you) |
   | **Branch** | `main` |
   | **Build Command** | `npm install && npm run build` |
   | **Start Command** | `npm start` |
   | **Plan** | Free |

5. **Set environment variables** (optional, but recommended):
   | Key | Value |
   |---|---|
   | `NODE_ENV` | `production` |
   | `NODE_VERSION` | `20` |

6. **Click "Create Web Service"** — Render will automatically:
   - Clone the repository
   - Install dependencies (`npm install`)
   - Build the Next.js app (`npm run build`)
   - Start the server (`npm start`)

7. **Your site will be live at:** `https://vanshika-portfolio.onrender.com`

   > You can set up a custom domain in the Render dashboard under **Settings** → **Custom Domain**.

#### Using `render.yaml` (Blueprint)

This project includes a `render.yaml` file for infrastructure-as-code. To use it:

1. Push the `render.yaml` to your GitHub repository
2. In Render dashboard, click **"New +"** → **"Blueprint"**
3. Select your repository — Render will automatically read the `render.yaml` and create the service

This approach is great for keeping your deployment configuration version-controlled.
