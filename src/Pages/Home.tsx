import { NavLink } from "react-router-dom";

export const Home = () => {
    document.title = "Accueil - Robbie Lens"
    return(
        <section>
            <header className="flex items-end bg-[white] text-[#242424]">
                <img src="images/logo.png" alt="" />
                <NavLink to="a-propos" className="hover:underline hover:opacity-50">A propos</NavLink>
            </header>
            <main>
                <h1>Photographie</h1>  
                <p>Où <span className="text-[#A5B4FC]">professionalisme</span> s’allie avec <span className="text-[#A5B4FC]">passion</span>. Depuis plus de 5 ans maintenant, j’exerce mon métier avec la passion qui m’anime : capturer l’essence de chaque instant.</p>
                <img src="images/robbie-lens.png" alt="" />
                <div>
                    <a href="" className="bg-gradient-to-r from-[#8e86b5] to-[#acaeed] text-white hover:bg-gradient-to-r hover:from-[#696484] hover:to-[#8788BA]">UN PROJET ? ÉCRIVEZ-MOI</a>
                </div>
            </main>
            <footer className='flex items-end bg-[white] text-[#242424]'>
                <img src="images/logo.png" alt="" />
                <a href="https://twitter.com/" target="_blank" className="hover:opacity-50"><img src="images/twitter.png" alt="" /></a>
                <a href="https://www.instagram.com/" target="_blank" className="hover:opacity-50"><img src="images/instagram.png" alt="" /></a>
            </footer>
        </section>
    )
}