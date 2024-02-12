import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCircleCheck } from "react-icons/fa6";


function Beneficios({background}) {


    return(
        <>
            <div className={`${background} pt-4 pb-4 d-flex flex-column align-items-center justify-content-center`}>
                <h1>Beneficios</h1>
                <Container className="mb-4 benefits-container">
                    <Col className="p-3 d-flex flex-column align-items-start justify-content-center">
                        <Row className="mt-3">
                            <div className=" d-flex align-items-center">
                                <section>
                                    <FaCircleCheck className="justify-self-center fs-1 me-3 second-green-color" />
                                </section>
                                <section>
                                    <p className="dark-grey-ft">Dejas de pagar el dividendo mes a mes.</p>
                                </section>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className="d-flex align-items-center">
                                <section>
                                    <FaCircleCheck className="fs-1 me-3 second-green-color" />
                                </section>
                                <section>
                                    <p className="dark-grey-ft">Evitas pedir un crédito de consumo a tasas ridiculamente altas.</p>
                                </section>
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <div className="d-flex align-items-center">
                                <section>
                                    <FaCircleCheck className="fs-1 me-3 second-green-color" />
                                </section>
                                <section>
                                    <p className="dark-grey-ft">No vendes tu propiedad apurad@, evitando castigar el valor de venta.</p>
                                </section>
                            </div>
                        </Row>
                    </Col>
                </Container>
            </div>
        </>
    )
}

export default Beneficios