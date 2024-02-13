import './signin.css'
import { Link } from 'react-router-dom'

function LoginComp(){

    return(
        <>
        <div className="m-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-4">Iniciar Sesión</h1>
            <div className="login-form p-5">
                <form className=" d-flex flex-column align-items-center">
                    <label className="align-self-start ms-1">Email</label>
                    <input type="email" className="" placeholder="Ingresa tu correo"/>
                    <label className="align-self-start mt-2 ms-1">Contraseña</label>
                    <input type="password" className="" placeholder="Contraseña"/>
                    <button className="sign-btn mt-2">Ingresar</button>
                </form>
            </div>
            <p className="mt-2">¿Aún no tienes una cuenta? <Link to="/registro" className="fst-italic fw-bold">Registrate!</Link></p>
        </div>
        </>
    )
}

export default LoginComp