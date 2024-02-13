import './user.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

function MyProfile(){

    return(
        <>
        <div className="m-5 d-flex flex-column align-items-center">
            <section>
                <h1>Bienvenido @Usuario! </h1>
            </section>
            <section>
                <p className="fs-4">¿En que te podemos ayudar hoy?</p>
            </section>
            <Container className="mt-4">
                <Col>
                    <section className="d-flex align-items-center justify-content-center">
                        <div>
                            <Link to="/mi-perfil/agendar"><button className="user-actions-btn">Agendar</button></Link>
                        </div>
                    </section>
                    <section className="d-flex align-items-center justify-content-center">
                        <div>
                            <Link to="/mi-perfil/simulador"><button className="user-actions-btn mt-2">Simular</button></Link>
                        </div>
                    </section>
                    <section className="d-flex align-items-center justify-content-center">
                        <div>
                            <Link to="/mi-perfil/datos"><button className="user-actions-btn mt-2">Mis Datos</button></Link>
                        </div>
                    </section>
                </Col>
            </Container>
        </div>
        </>
    )
}

export default MyProfile