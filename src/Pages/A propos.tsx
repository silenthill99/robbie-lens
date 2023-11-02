import { NavLink } from "react-router-dom"

export const APropos = () => {
    document.title = "À propos - Robbie Lens Photographie"
    return(
        <section>
            <NavLink to="/">Accueil</NavLink>
            <h1>A propos de Robbie Lens</h1>
            <p>Photographe depuis plus de 5 ans, je réalise des reportages aux photos dynamiques et pertinentes pour vos projets de communication. Créativité, qualité, et sérénité pour vous ! Je gère tous, depuis la direction artistique, la réalisation du reportage, jusqu'à la livraison de vos photos retouchées, prêtes à l'emploi.</p>
            <h2>Services</h2>
            <ul>
                <li>Services seuls ou à plusieurs</li>
                <li>Shooting mode</li>
                <li>Retouches sur mesure</li>
                <li>Développement</li>
            </ul>
        </section>
    )
}