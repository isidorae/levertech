import icon_1 from '/icons-imgs/icon_1.png'
import icon_2 from '/icons-imgs/icon_2.png'
import icon_3 from '/icons-imgs/icon_3.png'
import icon_4 from '/icons-imgs/icon_4.png'
import icon_5 from '/icons-imgs/icon_5.png'
import icon_6 from '/icons-imgs/icon_6.png'

function DirigidoA(){

    return(
        <>
        <div className="p-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fw-bold mb-3">¿A Quién Va Dirigido?</h2>
            <div class="mt-3 segmentos-container d-flex flex-column">
                <section class="d-flex flex-row align-items-center">
                    <img className="person-icon" src={icon_1}/>
                    <p className="ms-3 text-justify">
                        Personas que experimentan un cambio en su situación familiar y buscan ajustar sus necesidades de vivienda.
                    </p>
                </section>
                <section class="mt-3 d-flex flex-row align-items-center">
                    <img className="person-icon" src={icon_2}/>
                    <p className="ms-3 text-justify">
                    Individuos que desean adquirir una nueva vivienda debido a un cambio en su ubicación geográfica, pero se enfrentan a restricciones en la obtención de créditos hipotecarios.
                    </p>
                </section>
                <section class="mt-3 d-flex flex-row align-items-center">
                    <img className="person-icon" src={icon_3}/>
                    <p className="ms-3 text-justify">
                    Individuos que poseen un crédito hipotecario vigente y que necesitan deshacerse de él.
                    </p>
                </section>
                <section class="mt-3 d-flex flex-row align-items-center">
                    <img className="person-icon" src={icon_4}/>
                    <p className="ms-3 light-grey-ft text-justify">
                    PROXIMAMENTE** Individuos cuyos ingresos mensuales no cumplen con los requisitos establecidos por las entidades bancarias.
                    </p>
                </section>
                <section class="mt-3 d-flex flex-row align-items-center">
                    <img className="person-icon" src={icon_5}/>
                    <p className="ms-3 light-grey-ft text-justify">
                    PROXIMAMENTE** Personas de edad avanzada que se encuentran en la necesidad de vender su propiedad, quienes pueden carecer de ahorros líquidos suficientes para hacer frente a los gastos actuales.
                    </p>
                </section>
            </div>
        </div>
        </>
    )
}

export default DirigidoA