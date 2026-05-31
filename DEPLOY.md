# 🚀 Deploying Your Portfolio on Render — Step-by-Step Guide

This guide walks you through deploying the **Vanshika Chopra Portfolio** website on [Render](https://render.com) using the **Free Tier**.

---

## ✅ Prerequisites

Before starting, make sure you have:

- [ ] A **Render account** — Sign up free at [dashboard.render.com](https://dashboard.render.com) (GitHub login supported)
- [ ] The project code **pushed to GitHub** at `github.com/vanschopra/profile`

---

## 📦 Method 1: Deploy via Web Service (Recommended)

### Step 1: Log in to Render

Go to [dashboard.render.com](https://dashboard.render.com) and log in with your GitHub account.

### Step 2: Create a New Web Service

Click the **"New +"** button in the top-right → select **"Web Service"**.

### Step 3: Connect Your Repository

You'll see two options:

| Option | What to do |
|--------|-----------|
| **Connect GitHub** | If you logged in via GitHub, your repos will appear. Search for `vanschopra/profile` and select it. |
| **Public Git Repository** | If you prefer not to connect GitHub, paste: `https://github.com/vanschopra/profile` |

> **Tip:** Connecting your GitHub account makes future deployments automatic — every time you push to `main`, Render will redeploy.

### Step 4: Configure the Service

Fill in the following settings:

| Setting | Value |
|---------|-------|
| **Name** | `vanshika-portfolio` |
| **Runtime** | `Node` |
| **Region** | `Oregon` (US) — or pick the region closest to your audience |
| **Branch** | `main` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Plan** | `Free` |

> **Free Plan Note:** On the free tier, the service will spin down after 15 minutes of inactivity. It wakes up automatically when someone visits. The first request after inactivity may take a few seconds.

### Step 5: Add Environment Variables (Optional but Recommended)

Scroll down to the **Environment Variables** section and add:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `NODE_VERSION` | `20` |

### Step 6: Create the Service

Click the **"Create Web Service"** button at the bottom.

### Step 7: Wait for the Build

Render will now:

1. ✅ Clone your repository
2. ✅ Install dependencies (`npm install`)
3. ✅ Build the Next.js app (`npm run build`)
4. ✅ Start the production server (`npm start`)

Build logs will stream live in the dashboard. The first build typically takes **2–5 minutes**.

### Step 8: Visit Your Live Site

Once the build completes and the status shows **"Live"**, your site is available at:

```
https://vanshika-portfolio.onrender.com
```

Click the URL in the dashboard to open it!

---

## 📋 Method 2: Deploy via Blueprint (render.yaml)

This project includes a `render.yaml` file that pre-configures the service. This is faster.

### Steps

1. In the Render dashboard, click **"New +"** → **"Blueprint"**
2. Select your `vanschopra/profile` repository
3. Render will automatically read the `render.yaml` and create the Web Service with all settings pre-filled
4. Click **"Apply"** to deploy

---

## 🔄 Auto-Deploy on Push

By default, Render watches your GitHub repository. Every time you push changes to the configured branch (`main`), Render automatically:

1. Pulls the latest code
2. Runs the build command
3. Deploys the updated site

To see deployment history, go to your service's **"Events"** tab in the Render dashboard.

---

## 🌐 Adding a Custom Domain

Want to use your own domain (e.g., `vanshikachopra.com`)?

1. Go to your service in the Render dashboard → **Settings** tab
2. Scroll to **"Custom Domain"** section
3. Enter your domain and click **"Add Domain"**
4. Render will give you a **DNS target** (e.g., `vanshika-portfolio.onrender.com`)
5. Go to your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare) and add a **CNAME record** pointing to that target
6. Wait for DNS propagation (can take a few minutes to 24 hours)
7. Once verified, your site will be accessible via your custom domain

---

## ⚙️ Managing Your Deployment

### View Logs
- Go to your service → **Logs** tab to see real-time server logs
- Useful for debugging build failures or runtime errors

### Trigger a Manual Deploy
- Go to your service → **Manual Deploy** → **"Deploy latest commit"**
- Or push a new commit to GitHub (auto-deploy will trigger)

### Change Settings
- Go to your service → **Settings** tab
- You can update build command, start command, environment variables, etc.

### Change Plan
- Go to **Settings** → **Plan** to upgrade from Free to a paid plan (no spin-down, better performance)

---

## ❌ Troubleshooting

| Problem | Solution |
|---------|----------|
| **Build fails with "Cannot find module"** | Make sure `npm install` runs before `npm run build`. The build command is `npm install && npm run build`. |
| **App crashes on start** | Check the **Logs** tab for error details. Ensure `npm start` is the correct start command. For Next.js, the start command is `npx next start` or use the `start` script in `package.json`. |
| **Blank page after deploy** | Run a build locally first (`npm run build`) to catch any errors. Check browser console for JS errors. |
| **Free tier site is slow** | The free tier spins down after inactivity. The first request after idle takes a few seconds to wake up. |
| **Changes not reflecting** | Make sure you pushed to the correct branch (`main`) and auto-deploy is enabled in your service settings. |

---

## 📬 Need Help?

- [Render Docs](https://render.com/docs)
- [Render Dashboard](https://dashboard.render.com)
- [Render Status](https://status.render.com)
