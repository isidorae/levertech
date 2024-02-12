import { Link } from "react-router-dom"

function HeroImg() {

    return(
        <>
        <div className="hero-img-container">
            <div className="hero-img-opacity d-flex align-items-center">
                <div className="hero-img-content">
                    <section className="d-flex flex-column align-items-center justify-content-center text-center">
                        <h1 className="hero-img-title">Nos hacemos cargo de tu dividendo mientras vendemos tu propiedad</h1>
                        <Link to="/como-funciona"><button className="main-btn">Quiero saber más</button></Link>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroImg