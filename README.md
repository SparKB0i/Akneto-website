# Akneto Website

A modern, high-performance website for Akneto, an innovative IT solutions company. This project features a premium, responsive design with dynamic animations and a seamless user experience.

## 🚀 Features

-   **Modern UI/UX:** Sleek design with glassmorphism effects, vibrant gradients, and smooth transitions.
-   **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
-   **Dark Mode:** Built-in dark mode support for better accessibility and user preference.
-   **Dynamic Animations:** Powered by **Framer Motion** and **Anime.js** for engaging visual effects.
-   **Multi-Page Layout:** comprehensive pages including Home, About, Services, Products, Careers, Blog, and Contact.
-   **Interactive Elements:** Custom hover effects, animated counters, and client-side form validation.

## 🛠️ Tech Stack

-   **Frontend Framework:** [React](https://reactjs.org/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Styling:** [Bootstrap 5](https://getbootstrap.com/), [React Bootstrap](https://react-bootstrap.github.io/), and custom CSS variables.
-   **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (Lucide, FontAwesome, etc.)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/) & [Anime.js](https://animejs.com/)
-   **Deployment:** Netlify

## 📦 Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SparKB0i/Akneto-website.git
    cd akneto-redesign
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```
    The app will run at `http://localhost:3000`.

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🚀 Deployment

This project is configured for deployment on **Netlify**.

For detailed deployment instructions, including how to set up a custom domain, please refer to [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Netlify Setup
1.  Connect your repository to Netlify.
2.  Set the **Build Command** to `npm run build`.
3.  Set the **Publish Directory** to `build`.
4.  (Optional) The `netlify.toml` file in the root handles redirects for SPA routing automatically.

## 📂 Project Structure

```
akneto-redesign/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable components (Navbar, Footer, Hero, etc.)
│   ├── pages/          # Page components (Home, About, Services, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── styles/         # Global styles and design system
│   ├── utils/          # Utility functions
│   ├── App.js          # Main application component
│   └── index.js        # Entry point
├── netlify.toml        # Netlify configuration
└── README.md           # Project documentation
```

## 📄 License

This project is licensed under the MIT License.
