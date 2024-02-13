import SimBenefitsItem from "./SimBenefitsItem"
import { useState } from "react"

function SimAvanzado(){

    const [credito, setCredito] = useState("")
    const [dividendo, setDividendo] = useState("")
    const [meses, setMeses] = useState("")

    const [toPay, setToPay] = useState(0)
    const [displayResult, setDisplayResult] = useState(false)

    function simulacionAvanzada(e) {

        e.preventDefault()
        setDisplayResult(true)
        return setToPay((parseInt(credito)) * 0.015)

    }

    return(
        <>
        <div className="m-5 d-flex flex-column align-items-center justify-content-center">
            <h1>Simulador</h1>
            <section>
                <p className="px-5 dark-grey-ft text-center">Este simulador te da una idea de tu situación si tuvieras nuestra ayuda.<br/> Lo que arroja el simulador no es válido como tal, es una aproximacion</p>
            </section>
            <section className="mt-5 d-flex flex-column align-items-center">
                <h2 className="fw-bold">Tu situación actual</h2>
                <form onSubmit={simulacionAvanzada} className="d-flex flex-column align-items-center justify-content-center">
                    <fieldset className="d-flex flex-column">
                    <label htmlFor="">Monto actual crédito hipotecario (UF)</label>
                    <input value={credito}
                    onChange={(e) => {
                        setCredito(e.target.value)
                        setDisplayResult(false)
                    }}
                    type="number" placeholder="Ej: 14000" />
                    <label htmlFor="" className="mt-1">Monto de su dividendo (UF)</label>
                    <input value={dividendo}
                    onChange={(e) => {
                        setDividendo(e.target.value)
                        setDisplayResult(false)
                    }}
                    type="number" placeholder="Ej: 35" />
                    <label htmlFor="" className="mt-1">¿En cuántos meses estimas que se venderá tu propiedad?</label>
                    <select value={meses}
                    onChange={(e) => {
                        setDisplayResult(false)
                        setMeses(e.target.value)
                    }} >
                        <option>--Seleccionar--</option>
                        <option value={6}>6</option>
                        <option value={12}>12</option>
                        <option value={18}>18</option>
                        <option value={24}>24</option>
                    </select>
                    <button className="mt-2 sign-btn align-self-center">Simular</button>
                    </fieldset>
                </form>
            </section>
            {displayResult &&
            <section className="mt-5 mb-5 d-flex flex-column align-items-center">
            <h2 className="fw-bold">Tu situación con LeverProp 🚀</h2>
            <div>
                <SimBenefitsItem
                label={"Monto mensual adicional que tendrás disponible"}
                dataone={dividendo}
                datatwo={"UF"}
                />
                <SimBenefitsItem
                label={"Tiempo mínimo que no tendras que pagar dividendo"}
                dataone={meses}
                datatwo={"meses"}
                />
                <SimBenefitsItem
                label={"Cuanto le deberas al banco"}
                dataone={0}
                datatwo={null}
                />
                <SimBenefitsItem
                label={"Tiempo máximo que no tendrás que pagar dividendo"}
                dataone={24}
                datatwo={"meses"}
                />
                <SimBenefitsItem
                label={"Monto a pagar por nuestro servicio"}
                dataone={toPay}
                datatwo={"UF"}
                />
            </div>
        </section>}
            
        </div>
        </>
    )
}

export default SimAvanzado