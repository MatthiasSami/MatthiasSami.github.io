import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Root from './routes/root.tsx'
import Home from './routes/home.tsx'
import Projects from './routes/projects.tsx'
import AboutMe from './routes/about-me.tsx'
import Contact from './routes/contact.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}>
          <Route index={true} element={<Home/>}/>
          <Route path="accueil" element={<Home/>}/>
          <Route path="projets" element={<Projects/>}/>
          <Route path="a-propos" element={<AboutMe/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

