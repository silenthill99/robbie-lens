import { NavLink } from "react-router-dom"

export const APropos = () => {
    document.title = "À propos - Robbie Lens Photographie"
    return(
        <section>
            <div className="flex items-end bg-[white] text-[#242424]">
                <NavLink to="/"><img src="images/logo.png" alt="" /></NavLink>
                <NavLink to="/">Accueil</NavLink>
            </div>
            <h1>A propos de Robbie Lens</h1>
            <div className="border-t border-b border-[#8e86b5]">
                <p>Photographe depuis plus de 5 ans, je réalise des reportages aux photos dynamiques et pertinentes pour vos projets de communication. Créativité, qualité, et sérénité pour vous ! Je gère tous, depuis la direction artistique, la réalisation du reportage, jusqu'à la livraison de vos photos retouchées, prêtes à l'emploi.</p>
                <h2>Services</h2>
                <ul>
                    <li>Services seuls ou à plusieurs</li>
                    <li>Shooting mode</li>
                    <li>Retouches sur mesure</li>
                    <li>Développement</li>
                </ul>
            </div>

            <div>
                <a href="" className="bg-gradient-to-r from-[#8e86b5] to-[#acaeed] text-white">VOIR MON PORTFOLIO</a>
            </div>

            <footer className='flex items-end bg-[white] text-[#242424]'>
                <NavLink to="/"><img src="images/logo.png" alt="" /></NavLink>
                <a href="https://twitter.com/" target="_blank"><img src="images/twitter.png" alt="" /></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="images/instagram.png" alt="" /></a>
            </footer>
        </section>
    )
}