import { Outlet, NavLink } from 'react-router-dom'

export default function Root() {
  return (<>
    <header>
      <div className="nav-inner">
        <div className="brand">
          <img src="/moi.jpg" alt="Matthias Sami" className="profile-pic" />
          <div className="brand-text">
            <span>Matthias Sami</span>
            <small>Portfolio</small>
          </div>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/accueil" className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink></li>
            <li><NavLink to="/projets" className={({ isActive }) => isActive ? 'active' : ''}>Projets</NavLink></li>
            <li><NavLink to="/a-propos" className={({ isActive }) => isActive ? 'active' : ''}>À propos</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <p>© 2025 Matthias Sami — Construit avec React</p>
      <div className="socials">
        <a href="https://github.com/MatthiasSami" target="_blank" rel="noreferrer">
          <img src="/github.png" alt="GitHub" width="24" />
        </a>
        <a href="https://www.linkedin.com/in/matthias-sami/" target="_blank" rel="noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" width="24" />
        </a>
      </div>
    </footer>
  </>);
}