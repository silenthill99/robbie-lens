import { NavLink } from "react-router-dom";

export const Home = () => {
    document.title = "Accueil - Robbie Lens"
    return(
        <section className="flex">
            <div>
                <h1>Robbie Lens Photographie</h1>  
                <p>Où <span className="text-[#A5B4FC]">professionalisme</span> s’allie avec <span className="text-[#A5B4FC]">passion</span>. Depuis plus de 5 ans maintenant, j’exerce mon métier avec la passion qui m’anime : capturer l’essence de chaque instant.</p>
                <a href="" className="bg-gradient-to-r from-[#8e86b5] to-[#acaeed] text-white hover:bg-gradient-to-r hover:from-[#696484] hover:to-[#8788BA] rounded-full">UN PROJET ? ÉCRIVEZ-MOI</a>
            </div>
            <img src="images/robbie-lens.png" alt="" />
        </section>
    )
}