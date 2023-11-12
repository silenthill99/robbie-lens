import { NavLink } from "react-router-dom";

export const Home = () => {
    document.title = "Accueil - Robbie Lens"
    return(
        <section>
            <div className="flex flex-row gap-[15px] justify-center">
                <div>
                    <h1>Robbie Lens Photographie</h1>  
                    <p>Où <span className="text-[#A5B4FC]">professionalisme</span> s’allie avec <span className="text-[#A5B4FC]">passion</span>. Depuis plus de 5 ans maintenant, j’exerce mon métier avec la passion qui m’anime : capturer l’essence de chaque instant.</p>
                    <a href="#contacts" className="bg-gradient-to-r from-[#8e86b5] to-[#acaeed] text-white hover:bg-gradient-to-r hover:from-[#696484] hover:to-[#8788BA] rounded-full">UN PROJET ? ÉCRIVEZ-MOI</a>
                </div>
                <img src="images/robbie-lens.png" alt="" />
            </div>
            <section className="bg-white">
                <h2 className="text-[#242424] text-center mb-[80px]">Mon dernier projet</h2>
                <div className="flex flex-row gap-[15px] justify-center mb-[15px]">
                    <img src="images/accueil/element-1.png" alt="" />
                    <img src="images/accueil/element-2.png" alt="" />
                    <img src="images/accueil/element-3.png" alt="" />
                </div>
                <div className="flex flex-row gap-[15px] justify-center mb-[15px]">
                    <img src="images/accueil/element-4.png" alt="" />
                    <img src="images/accueil/element-5.png" alt="" />
                    <img src="images/accueil/element-6.png" alt="" />
                </div>
                
            </section>
            <section id="contacts">
                <h2 className="text-[#a5b4fc] text-center">Parlons de votre projet</h2>
                <form action="#" method="get">
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-[1] flex-col mb-5">
                            <label className="text-white" htmlFor="name">Nom </label>
                            <input type="text" className="border" id="name"/>
                        </div>
                        <div className="flex flex-[1] flex-col mb-5">
                            <label htmlFor="mail" className="text-white">Email</label>
                            <input type="email" name="" id="mail" className="border"/>
                        </div>
                    </div>
                    <label htmlFor="message" className="text-white">Message</label> <br/>
                    <textarea name="" id="message" rows={10} className="border"></textarea> <br/>
                    <input type="submit" value="Envoyer" className="text-white"/>
                </form>
            </section>
        </section>
    )
}