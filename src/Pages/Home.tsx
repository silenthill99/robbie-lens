import { NavLink } from "react-router-dom";

export const Home = () => {
    document.title = "Accueil - Robbie Lens"
    return(
        <section>
            <NavLink to="a-propos">A propos</NavLink>
            <h1>Photographie</h1>
            <p>Où professionalisme s’allie avec passion. Depuis plus de 5 ans maintenant, j’exerce mon métier avec la passion qui m’anime : capturer l’essence de chaque instant.</p>
        </section>
    )
}