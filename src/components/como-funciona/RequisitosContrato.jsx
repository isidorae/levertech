import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function RequisitosContrato(){

    return(
        <>
        <div className="p-5 d-flex flex-column align-items-center bg-color-soft-green">
            <h2 className="text-center fw-bold">Requisitos Para Contratar</h2>
            <div className="requisitos-text-container p-4 d-flex flex-column">
                <div className="d-flex align-items-center">
                    <section>
                        <IoArrowForwardCircleOutline className="fs-1 m-2 main-green-font"/>
                    </section>
                    <section>
                        <p className="dark-grey-ft">Estar convencido de querer vender.</p>
                    </section>
                </div>
                <div className="d-flex align-items-center">
                    <section>
                        <IoArrowForwardCircleOutline className="fs-1 m-2 main-green-font"/>
                    </section>
                    <section>
                        <p className="dark-grey-ft">Su crédito hipotecario debe tener una deuda no mayor al 60% del crédito total aproximadamente. <HashLink to="#SimuladorCalc" smooth>Ir a simulador simple.</HashLink></p>
                    </section>
                </div>
                <div className="d-flex align-items-center">
                    <section>
                        <IoArrowForwardCircleOutline className="fs-1 m-2 main-green-font"/>
                    </section>
                    <section>
                        <p className="dark-grey-ft">No tener una deuda activa por pensión alimenticia.</p>
                    </section>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-4">
                    <Link to="/contacto"><button className="main-btn">Lo Quiero!</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default RequisitosContrato