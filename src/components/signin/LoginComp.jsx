import './signin.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function LoginComp(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRegEx = (/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g.test(email))

    const [err, setErr] = useState([])

    function submitLoginForm(e){
        
        e.preventDefault()

        if (password == "" || email == ""){
            return setErr([...err, "Debes rellenar todos los campos."])
        }

        if (!emailRegEx){
            return setErr([...err, "Debes ingresar un email válido."])
        }

        let loginData = {
            email,
            password
        }

        console.log(loginData)
    }

    useEffect(() => {
        resetErrorMsgs()
    }, [err])

    const resetErrorMsgs = () => {
        let timer;
        if (err.length > 0) {
            timer =  setTimeout(() => {
                setErr([])
            }, 5000)
        }
       return () => clearTimeout(timer)
    }


    return(
        <>
        <div className="m-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-4">Iniciar Sesión</h1>
            <div className="login-form p-5">
                {err.length > 0 ? <p className="ms-1 form-err-msg">{ err }</p> : null}
                <form onSubmit={submitLoginForm} className=" d-flex flex-column align-items-center">
                    <fieldset className="d-flex flex-column align-items-start">
                    <label className="align-self-start ms-1">Email</label>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" className="" placeholder="Ingresa tu correo"/>
                    <label className="align-self-start mt-2 ms-1">Contraseña</label>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="" placeholder="Contraseña"/>
                    <button className="sign-btn mt-2">Ingresar</button>
                    </fieldset>
                </form>
            </div>
            <p className="mt-2">¿Aún no tienes una cuenta? <Link to="/registro" className="fst-italic fw-bold">Regístrate!</Link></p>
        </div>
        </>
    )
}

export default LoginComp