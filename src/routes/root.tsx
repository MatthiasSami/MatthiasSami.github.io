import { Outlet, NavLink } from 'react-router-dom'

export default function Root() {
  return (<>
    <header>
      <ul>
        <li><NavLink to="/accueil">Accueil</NavLink></li>
        <li><NavLink to="/projets">Projets</NavLink></li>
        <li><NavLink to="/a-propos">A propos</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <em>Matthias SAMI</em>
    </footer>
  </>);
}