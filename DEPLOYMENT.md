# Deployment Guide

Your portfolio is **built and ready to deploy**!

## 🚀 Recommended Method: Automatic Deployment (Continuous Deployment)

To have your portfolio update automatically every time you make a change, use **Netlify + GitHub**.

### Step 1: Create a GitHub Repository
1.  Go to [GitHub](https://github.com/) and create a new repository (e.g., `vinit-portfolio`).
2.  Do **not** initialize it with a README or .gitignore (since you already have them).

### Step 2: Push your code to GitHub
Run these commands in your terminal (I can help you with this if you'd like!):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vinit-portfolio.git
git push -u origin main
```

### Step 3: Connect GitHub to Netlify
1.  Go to your [Netlify Dashboard](https://app.netlify.com/).
2.  Click **"Add new site"** > **"Import an existing project"**.
3.  Choose **GitHub** and authorize Netlify.
4.  Select your `vinit-portfolio` repository.
5.  Configure Build Settings:
    - **Build Command:** `npm run build`
    - **Publish directory:** `dist`
6.  Click **"Deploy site"**.

**Now, whenever you `git push` new changes, Netlify will automatically build and update your live site!**

---

## 🛠️ Manual Method: Netlify Drop (Easiest for one-time)

If you just want to update it manually right now:
1.  **Open** the folder `d:\CDAC-Infoway\portfolio\vinit-portfolio`.
2.  **Locate** the `dist` folder.
3.  **Go to** [Netlify Drop](https://app.netlify.com/drop).
4.  **Drag and drop** the `dist` folder onto the page.
