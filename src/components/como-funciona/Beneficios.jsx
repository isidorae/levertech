import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillPatchCheckFill } from "react-icons/bs";


function Beneficios() {


    return(
        <>
            <div className="mt-5 mb-5 d-flex flex-column align-items-center justify-content-center">
                <h1>Beneficios</h1>
                <Container className="mt-3 benefits-container">
                    <Col>
                        <Row>
                            <div className=" d-flex align-items-center">
                                <BsFillPatchCheckFill className="me-2 fs-1 second-green-color" />
                                <p className="dark-grey-ft">Dejas de pagar el dividendo mes a mes.</p>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className="d-flex align-items-center">
                                <BsFillPatchCheckFill className="me-2 fs-1 second-green-color" />
                                <p className="dark-grey-ft">Evitas pedir un crédito de consumo a tasas ridiculamente altas.</p>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className=" d-flex align-items-center">
                                <BsFillPatchCheckFill className="me-2 fs-1 second-green-color" />
                                <p className="dark-grey-ft">Las utilidades generadas son invertidas en ayudar a más gente como tu.</p>
                            </div>
                        </Row>
                    </Col>
                </Container>
            </div>
        </>
    )
}

export default Beneficios