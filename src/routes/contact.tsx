export default function Contact() {
    return (<>
    <div className="contact">
        <div className="section-header">
            <h2>Contactez-moi</h2>
            <p className="section-intro">Je suis disponible pour des projets web, logiciels et des collaborations sur des prototypes innovants.</p>
        </div>

        <div className="contact-grid">
            <a href="https://www.linkedin.com/in/matthias-sami/" target="_blank" rel="noreferrer" className="contact-card">
                <strong>LinkedIn</strong>
                <p className="line">Réseau professionnel</p>
                <p>Suivez-moi pour voir mes dernières publications et opportunités de collaboration.</p>
            </a>
            <a href="https://github.com/MatthiasSami" target="_blank" rel="noreferrer" className="contact-card">
                <strong>GitHub</strong>
                <p className="line">Mes projets & prototypes</p>
                <p>Découvrez mon code en Java, C, React et d'autres réalisations techniques.</p>
            </a>
            <div className="contact-card">
                <strong>Email</strong>
                <p className="line">Contact direct</p>
                <a href="mailto:samimatthias@gmail.com" className="contact-link">samimatthias@gmail.com</a>
                <p style={{marginTop: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1'}}>Envoyez-moi un email pour échanger sur une mission, un stage ou un projet freelance.</p>
            </div>
            <div className="contact-card">
                <strong>Téléphone</strong>
                <p className="line">Appel ou SMS</p>
                <a href="tel:+33615909168" className="contact-link">+33 6 15 90 91 68</a>
                <p style={{marginTop: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1'}}>Disponible pour des discussions rapides sur vos besoins techniques.</p>
            </div>
        </div>
    </div>
    </>);
}

