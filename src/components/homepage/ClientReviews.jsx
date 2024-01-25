import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cardreview.css'
import stars from '/public/homepage-imgs/5starspngnew.png'
import alberto from '/public/homepage-imgs/testimoniotemplate.png'

function ClientReviews() {

    return(
        <>
            <div className="p-4 mt-2 text-center">
                <h1 className="mt-3 mb-4">Conoce la experiencia de nuestros clientes</h1>
                <Container className="justify-content-center align-items-center">
                    <Row>
                        <Col sm className="mb-4">
                            <div className="review-card d-flex flex-column">
                                <section>
                                    <img className="review-person-img" src={alberto} />
                                    <p className="light-font">Alberto Diaz</p>
                                </section>
                                <section>
                                <p className="light-font">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur fugiat sequi eveniet. Corporis labore ducimus consectetur soluta sunt minus eum tempore! Architecto minima consectetur dignissimos adipisci quae at alias?"</p>
                                    <img className="five-stars" src={stars}></img>
                                </section>
                            </div>
                        </Col>
                        <Col sm className="mb-4">
                            <div className="review-card d-flex flex-column">
                                <section>
                                    <img className="review-person-img" src={alberto} />
                                    <p className="light-font">Ignacio Gonzalez</p>
                                </section>
                                <section>
                                <p className="light-font">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur fugiat sequi eveniet. Corporis labore ducimus consectetur soluta sunt minus eum tempore!"</p>
                                    <img className="five-stars" src={stars}></img>
                                </section>
                            </div>
                        </Col>
                        <Col sm>
                            <div className="review-card d-flex flex-column">
                                <section>
                                    <img className="review-person-img" src={alberto} />
                                    <p className="light-font">Pedro Astudillo</p>
                                </section>
                                <section>
                                <p className="light-font">"Lorem, ipsum dolor sit amet consectetur adipisicing elit.  Corporis labore ducimus consectetur soluta sunt minus eum tempore! Architecto minima consectetur dignissimos adipisci quae at alias?"</p>
                                    <img className="five-stars" src={stars}></img>
                                </section>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default ClientReviews