import './navbar.css'
import logo from '../assets/leverwhite.png'
import { Link } from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <>
        <footer>
            <Container className="mb-4 pt-2" >
                <Row>
                    <Col sm={4}>
                        <img className="logo" src={logo}></img>
                        <section className="light-font mt-2">
                            Democratizando la estructura financiera inmobiliaria.
                        </section>
                    </Col>
                    <Col sm={3}>
                    <h3 className="footer-title light-font bold-text">Menu</h3>
                    <div className="light-text">
                        <p>Nosotros</p>
                        <p>Como funciona</p>
                        <p>Noticias</p>
                        <p>Preguntas frecuentes</p>
                        <p>Trabaja con nosotros</p>
                    </div>
                    </Col>
                    <Col>
                    <h3 className="footer-title light-font bold-text">Legal</h3>
                    <div className="light-text">
                        <p>Privacidad</p>
                        <p>Terminos</p>
                    </div>
                    </Col>
                    <Col className="text-center">
                    <h3 className="footer-title light-font bold-text">Siguenos!</h3>
                    <section className="mt-2">
                        <Link to="https://www.linkedin.com/company/leverchile/" className="me-2">
                        <BsInstagram className="light-ft-color icon-sm " />
                        </Link>
                        <Link to="https://www.instagram.com/levertech_cl/" className="me-2">
                        <ImLinkedin className="light-ft-color icon-sm"/> 
                        </Link>
                        <Link to="https://wa.me/<number>">
                        <ImWhatsapp m className="light-ft-color icon-sm" />
                        </Link>
                    </section>
                    </Col>
                </Row>
            </Container>
            <p className="text-center"><small className="light-font">Lever Tech SpA &#169; 2024</small></p>
            {/* <div className="d-flex flex-column align-items-center mt-3">
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
            </div> */}
        </footer>
        </>
    )
}

export default Footer