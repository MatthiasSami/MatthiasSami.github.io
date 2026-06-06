export default function AboutMe() {
    return (<>
    <div className="about-me">
        <section className="citation">
        <blockquote>
            “Choisis un travail que tu aimes et tu n’auras pas à travailler
            un seul jour de ta vie.”
        </blockquote>
        <cite>— Confucius</cite>
        </section>
        
        <section className="presentation-about-me">
            <div className="photoEtCV">
                <img src="/moi.jpg" alt="Photo de moi" className="imageMoi"/>
                <p><a href="CV Matthias SAMI.pdf" target="_blank" rel="noreferrer">Voir mon CV</a></p>
            </div>
            <div className="presentation-about-me-write">
                <h2>À propos de moi</h2>
                <p>
                    Je m'appelle <strong>Matthias SAMI</strong>, étudiant en 3ème année de BUT Informatique.
                    Passionné par le développement <strong>web</strong> et <strong>logiciel</strong>,
                    je suis motivé par la création de solutions utiles et la recherche
                    de nouvelles technologies pour améliorer mes projets.
                </p>
                <section className="valeurs">
                <h3>Mes valeurs</h3>
                <ul>
                    <li>💡 Curiosité et envie d’apprendre</li>
                    <li>🤝 Esprit d’équipe et collaboration</li>
                    <li>🎯 Persévérance et rigueur</li>
                </ul>

                <h3>Compétences principales</h3>
                <ul>
                    <li>🌐 Développement Web (React, HTML/CSS, JS/TS)</li>
                    <li>⚙️ Développement Logiciel (Java, C, Python)</li>
                    <li>🗄️ Bases de données (SQL, SQLite, PostgreSQL)</li>
                </ul>
                </section>
            </div>
        </section>
    </div>
    </>);
}