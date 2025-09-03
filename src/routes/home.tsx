import { NavLink } from "react-router-dom";

export default function Home() {
    return (<>
    <div className="home">
        <div className="intro">
            <img src="/moi.jpg" alt="Photo de moi" className="imageMoiRond" />
            <div className="presentation">
                <h2>Salut, je suis Matthias SAMI 👋</h2>
                <p>Etudiant en 3ème année de BUT Informatique,<br />
                passioné par l'informatique et plus particulièrement du développement web et logiciel.</p>
            </div>
        </div>
            
        <div className="cards">

            <NavLink to="/projets" className="card">
                <img src="/programming.jpg" alt="Mes projets" className="card-img" />
                <h3>🚀 Mes projets</h3>
                <p>Découvrez mes projets en développement web, C, Java et plus encore.</p>
            </NavLink>

            <NavLink to="/a-propos" className="card">
                <img src="/about-me.jpg" alt="À propos de moi" className="card-img" />
                <h3>👤 À propos</h3>
                <p>En savoir plus sur mon parcours et mes centres d’intérêt.</p>
            </NavLink>

            <NavLink to="/contact" className="card">
                <img src="/contact.jpg" alt="Contactez-moi" className="card-img" />
                <h3>📞 Contact</h3>
                <p>Restons en contact via LinkedIn, GitHub ou email.</p>
            </NavLink>
        </div>
    </div>
    </>);
}