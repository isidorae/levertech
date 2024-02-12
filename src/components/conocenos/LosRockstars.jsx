import { Link } from "react-router-dom"

function LosRockstars(){

    return(
        <>
        <div className="rockstars-container">
            <div className="rockstars-opacity-layer d-flex flex-column align-items-center justify-content-center">
                <section className="m-3">
                    <p className="fs-1 text-center fw-bold text-white">Conoce a los Rockstars! <span>👨🏻‍🎤👩🏻‍🎤</span></p>
                </section>
                <section>
                    <Link to="/equipo"><button className="main-btn">Ver más</button></Link>
                </section>
            </div>
        </div>
        </>
    )
}

export default LosRockstars