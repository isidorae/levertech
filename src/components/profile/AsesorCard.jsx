import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { SiLinkedin } from "react-icons/si";


function AsesorCard({img, name, text, linkedin, calendarpath}){

    return(
        <>
        <Col xs={12} sm={12} md={6} lg={4} className="asesor-card-container p-3 d-flex flex-column align-items-center">
              <section>
                <img className="equipo-card-img" src={img} />
              </section>
              <section className="asesor-about-container">
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                    <div className="d-flex flex-column">
                        <p className="fw-bold me-3 dark-grey-ft">{name}</p>
                    </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <section className="dark-grey-ft">
                        {text}
                        </section>
                        <section className="d-flex align-items-center">
                            <Link to={linkedin} target="_blank">
                                <p className="fst-italic me-2 grey-font">Ver perfil de Linkedin</p>
                            </Link>
                            <Link to={linkedin} target="_blank">
                                <SiLinkedin className="fs-3" />
                            </Link>
                        </section>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </section>
              <section>
                <Link to={calendarpath}><button className="modal-btn mt-2">Agendar</button></Link>
              </section>
            </Col>
        </>
    )
}

export default AsesorCard