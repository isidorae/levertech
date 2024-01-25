import './navbar.css'
import logo from '../assets/leverwhite.png'
import { Link } from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

function Footer() {
    return(
        <>
        <footer>
            <div className="d-flex flex-column align-items-center">
                <section>
                    <img className="logo" src={logo}></img>
                </section>
                <section className="light-font">
                    Democratizando la estructura financiera inmobiliaria
                </section>
                <section className="p-3">
                    <Link to="https://www.linkedin.com/company/leverchile/" className="me-2">
                    <BsInstagram className="light-ft-color icon-sm" />
                    </Link>
                    <Link to="https://www.instagram.com/levertech_cl/" className="me-2">
                    <ImLinkedin className="light-ft-color icon-sm"/> 
                    </Link>
                    <Link to="https://wa.me/<number>">
                    <ImWhatsapp m className="light-ft-color icon-sm" />
                    </Link>
                </section>
            </div>
            <div className="text-center">
            <p><small className="light-font">Lever Tech SpA &#169; 2024</small></p>
            </div>
        </footer>
        </>
    )
}

export default Footer