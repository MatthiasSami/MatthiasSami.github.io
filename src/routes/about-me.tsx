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
                <p><a href="CV Matthias SAMI.pdf" target="_blank">Voir mon CV</a></p>
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
            {/*
            <section className="logos">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Logo React" className="logoReact"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Logo Java" className="logoJava"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Logo Python" className="logoPython"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Logo HTML" className="logoHTML"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Logo CSS" className="logoCSS"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Logo JavaScript" className="logoJS"/>
            </section>
            */}
        </section>
    </div>
    </>);
}