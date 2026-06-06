export default function Projects() {
    return (<>
    <div className="projects">
        <div className="section-header">
            <h2>Projets récents</h2>
            <p className="section-intro">Voici quelques réalisations illustrant mon savoir-faire en développement web, applications logicielles et prototypes de jeux.</p>
        </div>
        <div className="cardsProjects">
            <a href="https://github.com/MatthiasSami/Labyrinthe-Java" target="_blank" rel="noreferrer" className="card">
                <div>
                    <h3>Labyrinthe Java</h3>
                    <p>Application de jeu en Java Swing, avec logique de plateau, déplacements et interface fluide pour une expérience utilisateur complète.</p>
                </div>
                <div className="project-tags">
                    <span className="badge">Java</span>
                    <span className="badge">Swing</span>
                    <span className="badge">Jeu</span>
                </div>
            </a>
            <a href="https://github.com/MatthiasSami/ServeurDeJeux-C" target="_blank" rel="noreferrer" className="card">
                <div>
                    <h3>Serveur de jeux C</h3>
                    <p>Infrastructure réseau en C pour gérer des parties multi-joueurs, sessions et messages entre clients.</p>
                </div>
                <div className="project-tags">
                    <span className="badge">C</span>
                    <span className="badge">Réseau</span>
                    <span className="badge">Backend</span>
                </div>
            </a>
            <a href="https://dribble-battle.vercel.app/" target="_blank" rel="noreferrer" className="card">
                <div>
                    <h3>Dribble Battle</h3>
                    <p>Prototype de simulateur de foot avec dribble et interaction joueur, conçu pour valoriser l'UX et la gestion de mouvements sur le terrain.</p>
                </div>
                <div className="project-tags">
                    <span className="badge">Simulation</span>
                    <span className="badge">Jeu</span>
                    <span className="badge">UI</span>
                </div>
            </a>
            <a href="https://github.com/MatthiasSami" target="_blank" rel="noreferrer" className="card">
                <div>
                    <h3>Portfolio moderne</h3>
                    <p>Ce site portfolio, pensé pour une présentation claire et professionnelle de mes compétences et projets.</p>
                </div>
                <div className="project-tags">
                    <span className="badge">React</span>
                    <span className="badge">Design</span>
                    <span className="badge">Responsive</span>
                </div>
            </a>
        </div>
    </div>
    </>);
}