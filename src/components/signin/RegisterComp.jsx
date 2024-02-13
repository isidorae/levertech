import './signin.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function RegisterComp(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confirm, setConfirm] = useState("")

    function submitRegisterForm(e) {
        e.preventDefault()

        if (nameErr.length > 0 || emailErr.length > 0 || passwordErr.length > 0 || confirmErr.length > 0) {
            return
        }

        if (pass != confirm){
            return console.log("contraseñas deben coincidir.")
        }

        const registerData = {
            name,
            email,
            pass
        }

        console.log(registerData)

    }

    // errors
    const [nameErr, setNameErr] = useState([])
    const [emailErr, setEmailErr] = useState([])
    const [passwordErr, setPasswordErr] = useState([])
    const [confirmErr, setConfirmErr] = useState([])

    const emailRegEx = (/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g.test(email))

    function onBlurErrEvent(value){
        if (value == "name") {
            if (name == "") {
                return setNameErr(["Porfavor ingresa tu nombre. 👍🏼"])
            } else {
                return setNameErr([])
            }
        }

        if (value == "email") {
            if (!emailRegEx || email == "") {
                return setEmailErr(["Debes ingresar un email válido."])
            } else {
                return setEmailErr([])
            }
        }

        if (value == "password") {
            if (pass.length < 3 || pass == "") {
                return setPasswordErr(["Tu contraseña debe tener al menos 4 caracteres."])
            } else {
                return setPasswordErr([])
            }
        }

        if (value == "confirm") {
            if (confirm != pass|| confirm == "") {
                return setConfirmErr(["Las contraseñas deben coincidir."])
            } else {
                return setConfirmErr([])
            }
        }
    }

    return(
        <>
        <div className="m-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-4">Regístrate</h1>
            <div className="register-form p-5">
                <form onSubmit={submitRegisterForm} className=" d-flex flex-column align-items-center">
                    <fieldset className="d-flex flex-column align-items-start">
                        <label className="align-self-start ms-1">Nombre</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} onBlur={()=> onBlurErrEvent("name")} type="text" className="" placeholder="Ingresa tu nombre"/>
                        {nameErr.length > 0
                        ? <span className="ms-1 form-err-msg">{nameErr}</span>
                        : null
                        }
                    </fieldset>
                    <fieldset className="d-flex flex-column align-items-start">
                        <label className="align-self-start ms-1">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} onBlur={()=> onBlurErrEvent("email")} type="email" className="" placeholder="Ingresa tu correo"/>
                        {emailErr.length > 0
                        ? <span className="ms-1 form-err-msg">{emailErr}</span>
                        : null
                        }
                    </fieldset>
                    <fieldset className="d-flex flex-column align-items-start">
                        <label className="align-self-start mt-2 ms-1">Contraseña</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} onBlur={()=> onBlurErrEvent("password")} type="password" className="" placeholder="Contraseña"/>
                        {passwordErr.length > 0
                        ? <span className="ms-1 form-err-msg">{passwordErr}</span>
                        : null
                        }
                    </fieldset>
                    <fieldset className="d-flex flex-column align-items-start">
                        <label className="align-self-start mt-2 ms-1">Confirmar contraseña</label>
                        <input value={confirm} onChange={(e) => setConfirm(e.target.value)} onBlur={()=> onBlurErrEvent("confirm")} type="password" className="" placeholder="Contraseña"/>
                        {confirmErr.length > 0
                        ? <span className="ms-1 form-err-msg">{confirmErr}</span>
                        : null
                        }
                    </fieldset>
                    <button className="sign-btn mt-2">Registrar</button>
                </form>
            </div>
            <p className="mt-2">¿Ya tienes una cuenta? <Link to="/login" className="fst-italic fw-bold">Inicia sesión!</Link></p>
        </div>
        </>
    )
}

export default RegisterComp