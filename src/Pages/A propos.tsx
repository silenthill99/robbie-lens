import { NavLink } from "react-router-dom"

export const APropos = () => {
    document.title = "À propos - Robbie Lens Photographie"
    return(
        <section className="m-auto">
            <h1 className="text-center">À propos</h1>
            <div className="border-y border-[#8e86b5] p-[50px]">
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
                <NavLink to="../portfolio" className="bg-gradient-to-r from-[#8e86b5] to-[#acaeed] text-white hover:bg-gradient-to-r hover:from-[#696484] hover:to-[#8788BA] rounded-full inline-block">VOIR MON PORTFOLIO</NavLink>
            </div>

            <h2 className="text-center mb-20">Tarifs</h2>

            <table className="text-white text-center w-[100%]">
                <thead>
                    <tr>
                        <th className="border p-[15px] border-[#a5b4fc]">Désignation</th>
                        <th className="border p-[15px] border-[#a5b4fc]">Quantité</th>
                        <th className="border p-[15px] border-[#a5b4fc]">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-[#a5b4fc] p-20">Retouches photo studio professionnel</td>
                        <td className="border border-[#a5b4fc] p-20"> x 800 photos</td>
                        <td className="border border-[#a5b4fc] p-20">3200€/800 photos</td>
                    </tr>
                    <tr>
                        <td className="border border-[#a5b4fc] p-20">Assistant photo lumière professionnel</td>
                        <td className="border border-[#a5b4fc] p-20">x2 sets studio</td>
                        <td className="border border-[#a5b4fc] p-20">1500€/journée</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}