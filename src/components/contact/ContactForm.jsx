import { useState } from "react"


function ContactForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [credit, setCredit] = useState("")
    const [reason, setReason] = useState("")
    const [text, setText] = useState("")

    // errors
    const [nameErr, setNameErr] = useState([])
    const [emailErr, setEmailErr] = useState([])
    const [creditErr, setCreditErr] = useState([])
    const [reasonErr, setReasonErr] = useState([])
    const [textErr, setTextErr] = useState([])

    const emailRegEx = (/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g.test(email))

    function onBlurEvent(value){

        if (value == "name") {
            if (name == "") {
                return setNameErr(["Porfavor ingresa tu nombre. 👍🏼"])
            } else {
                return setNameErr([])
            }
        }

        if (value == "email") {
            if (!emailRegEx) {
                return setEmailErr(["Debes ingresar un email válido."])
            } else {
                return setEmailErr([])
            }
        }

        if (value == "credit") {
            if (credit == "") {
                return setCreditErr(["Porfavor rellena este campo. 👍🏼"])
            } else {
                return setCreditErr([])
            }
        }
        if (value == "reason") {
            if (reason== "") {
                return setReasonErr(["Porfavor selecciona una opción. 👍🏼"])
            } else {
                return setReasonErr([])
            }
        }
        if (value == "text") {
            if (text == "") {
                return setTextErr(["Porfavor escribe un mensaje. 👍🏼"])
            } else {
                return setTextErr([])
            }
        }

    }

    function contactFormData(e) {
        e.preventDefault()

        if (creditErr.length > 0 || textErr.length > 0 || reasonErr.length > 0 || emailErr.length > 0 || nameErr.length > 0) {
            console.log("debes los campos faltantes")
            return
        }

        const data = {
            name,
            email,
            credit,
            reason,
            text
        }

        console.log(data)
    }

    return(
        <>
        <div className="contact-form-card mt-4 mb-5">
            <form onSubmit={ contactFormData } className="d-flex flex-column">
                <label className="mt-2">Nombre Completo*</label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={() => onBlurEvent("name")} className={nameErr.length > 0 ? "form-err" : null}
                type="text" placeholder="Nombre completo" />
                {nameErr.length > 0
                ? <span className="ms-1 form-err-msg">{nameErr}</span>
                : null
                }
                <label className="mt-2">Correo*</label>
                <input
                value={email} onChange={(e) => setEmail(e.target.value)} 
                onBlur={() => onBlurEvent("email")} className={emailErr.length > 0 ? "form-err" : null}
                type="text" placeholder="Correo"/>
                {emailErr.length > 0
                ? <span className="ms-1 form-err-msg">{emailErr}</span>
                : null
                }
                <label className="mt-2">¿Cuánto debe de su crédito hipotecario?*</label>
                <input
                value={credit} onChange={(e) => setCredit(e.target.value)}
                onBlur={() => onBlurEvent("credit")} className={creditErr.length > 0 ? "form-err" : null}
                type="text" placeholder="Ej: 9.000 UF" />
                {creditErr.length > 0 
                ? <span className="ms-1 form-err-msg">{creditErr}</span>
                : null
                }
                <label className="mt-2">Quiero vender para*</label>
                <select value={reason} onChange={(e) => setReason(e.target.value)}
                onBlur={() => onBlurEvent("reason")} className={reasonErr.length > 0 ? "form-err" : null}>
                    <option>--Seleccionar--</option>
                    <option value="Comprar" className="option-input">Comprar</option>
                    <option value="Arrendar">Arrendar</option>
                    <option value="Otro">Otro</option>
                </select>
                {reasonErr.length > 0 
                ? <span className="ms-1 form-err-msg">{reasonErr}</span>
                : null
                }
                <label className="mt-2">Mensaje*</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)}
                onBlur={() => onBlurEvent("text")}
                className={textErr.length > 0 ? "form-err" : null}
                ></textarea>
                {textErr.length > 0
                ? <span className="ms-1 form-err-msg">{textErr}</span>
                : null
                }
                <button className="mt-2 send-btn">Enviar</button>
            </form>
        </div>
        </>
    )
}

export default ContactForm