import HeroImgService from "./HeroImgService"
import Pasos from "./Pasos"
import Beneficios from "./Beneficios"
import './como-funciona.css'

function ComoFunciona() {

    return(
        <>
        <div className="bg-color-white pt-2 pb-1">
            <h1 className="fst-italic text-center mt-5">¿Cómo Funciona?</h1>
        </div>
        <div className="comofunciona-text-container text-center bg-color-white">
            <p className="fw-bold fs-2 grey-font">
                <span className="fs-4 dark-grey-ft fw-light"> ¿Te quieres mudar y tu propiedad actual te genera un gasto mensual que no te lo permite?</span><br />
                ¡Atrévete con Lever y no te preocupes más!
            </p>
        </div>
        <div className="pasos-container">
            <Pasos />
        </div>
        <HeroImgService />
        <Beneficios />
        </>
    )
}

export default ComoFunciona