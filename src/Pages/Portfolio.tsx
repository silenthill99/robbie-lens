export const Portfolio = () => {
    document.title = "Portfolio - Robbie Lens photographie"
    return(
        <section>
            <section>
                <h1>Portfolio</h1>
                <section className="bg-white">
                    <h2 className="text-[#242424] mb-[80px]">Voyages</h2>
                    <div className="grid grid-cols-3 grid-rows-[300px_300px_300px] gap-[15px]">
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/paysage1.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/paysage2.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/paysage3.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/paysage4.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/paysage5.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/paysage6.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/paysage7.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/paysage8.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/paysage9.jpg" alt="" />
                    </div>
                    <h2 className="text-[#242424] mb-[80px]">Portraits</h2>
                    <div className="grid grid-cols-3 grid-rows-[300px_300px] gap-[15px]">
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/portrait1.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/portrait2.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/portrait3.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/portrait4.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/portrait5.jpg" alt="" />
                        <img className="w-[100%] h-[100%] object-cover" src="images/portfolio/portrait6.jpg" alt="" />
                    </div>
                </section>
            </section>
        </section>
    )
}