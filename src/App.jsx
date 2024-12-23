import { lazy, Suspense } from 'react'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom';

// lazy loading :
const Home = lazy(() => 
  import("./components/Home").then(async (module) => {
    const { delay } = await import('./utils/delay'); 
    await delay(2000); 
    return module;
  })
);
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Services = lazy(() => import('./components/Services'));
const NotFound = lazy(() => import('./pages/NotFound'));
const DynamicPage = lazy(() => import('./pages/DynamicPage'));

function App() {

  return (
    <div>
      <nav>
        <NavLink to={'/'} style={{marginRight: '10px', padding:"10px"}}>Accueil</NavLink> 
        <NavLink to="/about" style={{ marginRight: '10px', padding:"10px" }}>À propos</NavLink>  
        <NavLink to="/contact" style={{ marginRight: '10px', padding:"10px" }}>Contact</NavLink>  
        <NavLink to="/services" style={{ marginRight: '10px', padding:"10px" }}>Services</NavLink>
        <NavLink to="/dynamic/123" style={{ marginRight: '10px' }}>Page Dynamique</NavLink>
      </nav>
      <Suspense fallback={<div className="loading">Chargement...</div>}>
      <Routes>
          <Route path="/" element={<div className="page-container"><Home /></div>} />
          <Route path="/about" element={<div className="page-container"><About /></div>} />
          <Route path="/contact" element={<div className="page-container"><Contact /></div>} />
          <Route path="/services" element={<div className="page-container"><Services /></div>} />
          <Route path="*" element={<div className="page-container"><NotFound /></div>} />
          <Route path="/dynamic/:id" element={<div className="page-container"><DynamicPage /></div>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
