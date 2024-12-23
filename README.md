# React Router 🚀

A simple React app that demonstrates the use of **React Router** with lazy loading, navigation, and styled components.

This project was created with **Vite** to ensure fast development and optimized builds.

---

## Features ✨
- **React Router** for routing between pages.
- **Lazy Loading** with `React.lazy` and `Suspense` for optimized component loading.
- Custom **fallback loader** during page transitions.

---

## Pages 🖥️
- **Home**: Displays the homepage content.
- **About**: Provides details about the app.
- **Contact**: A simple contact page.
- **404 Page (optional)**: You can expand this app to handle unknown routes.

---

## Prerequisites 🛠️

Make sure you have the following installed on your system:
- Node.js (>= 16.x recommended)
- npm or yarn

---

## Getting Started 🏃‍♂️

1. Clone the repository:
   ```bash
   git clone https://github.com/ElazzouziHassan/ReactRouterTP.git
   cd ReactRouterTP
   ```

2. Install dependencies:
  ```bash
    npm install
  ```

3. Start the development server:
  ```bash
    npm run dev
  ```
4. Open your browser and navigate to:
  ```bash
    http://localhost:5173
  ```
## File Structure 📂
  ```bash
  src/
  ├── pages/
  │   ├── DynamicPage.jsx
  │   ├── NoyFound.jsx
  ├── components/
  │   ├── Home.jsx
  │   ├── About.jsx
  │   ├── Contact.jsx
  │   ├── Services.jsx
  ├── utils/
  │   └── delay.js
  ├── App.jsx
  ├── App.css
  ├── main.jsx
  ```
- components/: Contains the React components for each page.
- utils/delay.js: Simulates delay for lazy loading.
- App.jsx: Main application file with routing and navigation.
- App.css: Centralized styling for the app.
- main.jsx: Entry point of the app.

## Technologies Used 🛠️
- React
- React Router
- React.lazy & Suspense
- CSS Styling
- Vite

## How It Works ⚙️
- Lazy Loading: Pages are loaded only when visited using React.lazy.
- Fallback: A "Loading..." message is shown during the loading of components.
- Navigation: Styled links are provided for seamless navigation between pages.

## Contribution 🤝
Feel free to fork this repository, raise issues, or submit pull requests! All contributions are welcome.
---
## AUTHOR 
EL AZZOUZI HASSAN (WIZARDY).

