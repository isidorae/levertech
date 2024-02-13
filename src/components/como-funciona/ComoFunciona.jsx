import HeroImgService from "./HeroImgService"
import Pasos from "./Pasos"
import Beneficios from "./Beneficios"
import './como-funciona.css'
import DirigidoA from "./DirigidoA"
import RequisitosContrato from "./RequisitosContrato"
import SimuladorCalc from "./SimuladorCalc"
import { Link } from "react-router-dom"

function ComoFunciona() {

    return(
        <>
        {/* <div className="bg-color-white pt-2 pb-1">
            <h1 className="text-center mt-5">¿Cómo Funciona?</h1>
        </div> */}
        <div className="comofunciona-text-container text-center bg-color-white">
            <div className="como-funciona-text-opacity d-flex flex-column align-items-center justify-content-center">
                <section>
                    <h1 className="fs-1 text-center text-white shadow-text">¿Cómo Funciona?</h1>
                </section>
                <section className="mt-2 ps-5 pe-5">
                    <p className="fs-4 text-white fw-bold shadow-text">
                        ¿Te quieres mudar y tu propiedad actual te genera un gasto mensual que no te lo permite?<br />
                        ¡Atrévete con Lever y no te preocupes más!
                        </p>
                </section>
            </div>
        </div>
        <div className="pasos-container">
            <Pasos />
        </div>
        <HeroImgService />
        <Beneficios
        background={"bg-color-light"} />
        <DirigidoA />
        <RequisitosContrato />
        <div className="p-5">
            <p className="text-center fst-italic fs-1 grey-font">
            ¡No nos importa tu historial financiero! Ayudamos a personas visionarias que quieran cambiar su situación actual.
            </p>
        </div>
        <SimuladorCalc/>
        <div className="m-5 d-flex flex-column align-items-center">
            <p className="fs-3 dark-grey-ft text-center">¿Tienes Dudas? Te invitamos a revisar la sección de <b>preguntas frecuentes.</b></p>
            <Link to="/faqs"><button className="main-btn mt-3">Ir a preguntas</button></Link>
        </div>
        </>
    )
}

export default ComoFunciona