import { NavLink } from "react-router-dom";

export default function Home() {
    return (<>
    <div className="home">
        <section className="hero">
            <div className="hero-grid">
                <div className="hero-text">
                    <span className="eyebrow">Portfolio professionnel</span>
                    <h1>Bonjour, je suis Matthias Sami</h1>
                    <p>Je suis étudiant en 3ème année de BUT Informatique à la recherche d'une alternance pour la rentré de septembre 2026.</p>
                    <div className="cta-buttons">
                        <NavLink to="/projets" className="btn btn-primary">Voir mes projets</NavLink>
                        <NavLink to="/contact" className="btn btn-secondary">Me contacter</NavLink>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/moi.jpg" alt="Portrait de Matthias Sami" />
                </div>
            </div>
        </section>
    </div>
    </>);
}