import './signin.css'
import { Link } from 'react-router-dom'

function RegisterComp(){

    return(
        <>
        <div className="m-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-4">Regístrate</h1>
            <div className="login-form p-5">
                <form className=" d-flex flex-column align-items-center">
                    <label className="align-self-start ms-1">Nombre</label>
                    <input type="text" className="" placeholder="Ingresa tu nombre"/>
                    <label className="align-self-start ms-1">Email</label>
                    <input type="email" className="" placeholder="Ingresa tu correo"/>
                    <label className="align-self-start mt-2 ms-1">Contraseña</label>
                    <input type="password" className="" placeholder="Contraseña"/>
                    <label className="align-self-start mt-2 ms-1">Confirmar contraseña</label>
                    <input type="confirm" className="" placeholder="Contraseña"/>
                    <button className="sign-btn mt-2">Registrar</button>
                </form>
            </div>
            <p className="mt-2">¿Ya tienes una cuenta? <Link to="/login" className="fst-italic fw-bold">Inicia sesión!</Link></p>
        </div>
        </>
    )
}

export default RegisterComp