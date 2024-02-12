import { useState, useEffect } from "react"

function SimuladorCalc(){

    const levereable = "levereable 👍🏼"
    const no_levereable = "no levereable 🙁"

    const [valor, setValor] = useState("")
    const [deuda, setDeuda] = useState("")
    const [resultado, setResultado] = useState(0)
    const [textResult, setTextResult] = useState(levereable)
    const [err, setErr] = useState([])

    useEffect(() => {
        resetErr()
    }, [err])

    const resetErr = () => {
        let timer;
        if (err.length > 0) {
            timer = setTimeout(() => {
                setErr([])
            }, 4000)
        }
        return () => clearTimeout(timer);
    }

     const simularDeuda = (e) => {
        e.preventDefault()

        if (deuda == "" || valor == "") {
            return setErr(["Porfavor rellena ambos campos."])
        }

        let deudaInt = parseInt(deuda)
        let valorInt = parseInt(valor)

        let resultadoSim = Math.trunc((deudaInt/valorInt) * 100);
        setResultado(resultadoSim)

        if (resultadoSim > 60){
            console.log(resultadoSim)
            return setTextResult(no_levereable);
        }
        if (resultadoSim <= 60) {
            console.log(resultadoSim)
            return setTextResult(levereable);
        }

     }

    return(
        <>
        <div id="SimuladorCalc" className="p-5 bg-color-soft-green d-flex flex-column align-items-center">
            <h2 className="fw-bold fs-1 text-center">Simulador</h2>
            <div className="m-3 simulador-container">
                <section>
                    <form onSubmit={simularDeuda} className="d-flex flex-column">
                        {err.length > 0 && err.map((err) => {
                            return (
                                <p className="form-err-msg fw-bold">
                                    {err}
                                </p>
                            )
                        })}
                        <label className="ms-1 text-white fw-bold">Valor de tu propiedad</label>
                        <input value={valor} onChange={(e) => setValor(e.target.value)} type="Number" className="mt-1 simulador-input" placeholder="Valor en UF. Ej: 12000"/>
                        <label className="ms-1 text-white fw-bold mt-3">Deuda Actual</label>
                        <input value={deuda} onChange={(e) => setDeuda(e.target.value)} type="Number" className="mt-1 simulador-input" placeholder="Valor en UF. Ej: 5000"/>
                        <button className="simulador-btn mt-4 fw-bold align-self-center">Simular</button>
                    </form>
                </section>
                <section className="m-3 mt-4 d-flex flex-column align-items-center">
                    <p className="fs-2 text-white fw-bold">{resultado}%</p>
                    <p className="fs-5 fw-bold green-light-ft ">{textResult}</p>
                </section>
            </div>
        </div>
        </>
    )
}

export default SimuladorCalc