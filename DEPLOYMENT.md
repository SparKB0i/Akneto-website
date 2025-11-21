# Deploying Akneto Website to Netlify

This guide outlines the steps to deploy your React application to Netlify and configure a custom domain.

## Prerequisites

- A [Netlify](https://www.netlify.com/) account.
- Your project code ready (we have already verified the build locally).
- A purchased domain name (e.g., from GoDaddy, Namecheap) if you want to use a custom domain.

## Option 1: Deploy via Git (Recommended)

This method sets up continuous deployment. Every time you push to your Git repository, Netlify will automatically rebuild and deploy your site.

1.  **Push your code to GitHub/GitLab/Bitbucket.**
    - Ensure your latest changes are committed and pushed.
2.  **Log in to Netlify.**
3.  Click **"Add new site"** > **"Import an existing project"**.
4.  Select your Git provider (e.g., GitHub).
5.  Authorize Netlify to access your repositories.
6.  Search for and select your `akneto-website` repository.
7.  **Configure Build Settings:**
    - **Base directory:** `akneto-redesign` (Since your project is in a subdirectory)
    - **Build command:** `npm run build`
    - **Publish directory:** `build`
8.  Click **"Deploy site"**.

## Option 2: Deploy via Drag & Drop (Manual)

If you don't want to connect a Git repository, you can deploy the built files manually.

1.  **Build the project locally:**
    - Open your terminal in the `akneto-redesign` directory.
    - Run: `npm run build`
    - This creates a `build` folder in your project directory.
2.  **Log in to Netlify.**
3.  Go to the **"Sites"** tab.
4.  Scroll down to the drag-and-drop area.
5.  **Drag the `build` folder** (not the entire project folder) into the Netlify drop zone.
6.  Wait for the upload to complete. Your site is now live!

## Setting up a Custom Domain

Once your site is deployed, follow these steps to add your own domain (e.g., `www.yourcompany.com`).

1.  Go to your **Site Overview** page in Netlify.
2.  Click on **"Domain settings"**.
3.  Click **"Add custom domain"**.
4.  Enter your domain name (e.g., `akneto.com`) and click **"Verify"**.
5.  Click **"Add domain"**.
6.  **Configure DNS Records:**
    - Netlify will provide you with DNS instructions. You have two main options:
        - **Option A: Use Netlify DNS (Recommended)**
            - Click "Set up Netlify DNS".
            - Netlify will give you 4 nameservers (e.g., `dns1.p01.nsone.net`).
            - Go to your domain registrar (where you bought the domain) and replace their nameservers with the ones Netlify provided.
            - *Note: This can take up to 24-48 hours to propagate, but usually happens much faster.*
        - **Option B: Configure External DNS**
            - If you want to keep your DNS managed by your registrar.
            - Create a **CNAME record** for `www` pointing to your Netlify site address (e.g., `akneto-redesign.netlify.app`).
            - Create an **A record** for the root domain (`@` or blank) pointing to Netlify's load balancer IP: `75.2.60.5`.

## Verification

- Visit your Netlify URL (e.g., `https://random-name.netlify.app`) to ensure the site loads.
- Test navigation between pages (Home, About, Services, etc.) to ensure the router works (we added `netlify.toml` to handle this).
- Once DNS propagates, visit your custom domain to verify it serves the site securely (Netlify automatically provisions SSL).
