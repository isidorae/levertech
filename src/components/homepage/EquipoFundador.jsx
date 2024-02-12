import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ale from '/aboutus-imgs/el_palanca.png'
import benja from '/aboutus-imgs/benja_smith.png'
import mario from '/aboutus-imgs/mario_lipari.png'
import gonzalo from '/aboutus-imgs/gonzalo-team.png'

function EquipoFundador() {

    return(
        <>
            <div className="bg-color-light-green pb-5">
                <h1 className="light-font pt-5 mb-2 text-center">El Equipo Fundador!</h1>
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
                        <div className="equipo-card p-4 d-flex flex-column align-items-center justify-content-start">
                                <section className="mb-2 mt-3 d-flex flex-column align-items-center">
                                    <img className="review-person-img" src={ale} />
                                    <p className="light-font client-name mt-1 text-center">Alejandro Longueira</p>
                                </section>
                                <section className="client-review-text">
                                    <p className="light-font text-center">
                                    Ingeniero comercial con magister en finanzas y MBAUC. Se auto define como banquero y cuenta con más de 13 años de experiencia en ese rubro.
                                    </p>
                                </section>
                            </div>
                            <div className="equipo-card p-4 d-flex flex-column align-items-center justify-content-start">
                                <section className="mb-2 mt-3 d-flex flex-column align-items-center">
                                    <img className="review-person-img" src={benja} />
                                    <p className="light-font client-name mt-1 text-center justify-content-center">Benjamín Smith</p>
                                </section>
                                <section className="client-review-text">
                                    <p className="light-font text-center">
                                    Ingeniero Comercial con Máster en Dirección Estratégica de Ventas, cuenta con una amplia trayectoria en el mundo de Retail, con enfoque en áreas comerciales y ecommerce.
                                    </p>
                                </section>
                            </div>
                            <div className="equipo-card p-4 d-flex flex-column align-items-center justify-content-start">
                                <section className="mb-2 mt-3 d-flex flex-column align-items-center">
                                    <img className="review-person-img" src={gonzalo} />
                                    <p className="light-font client-name mt-1 text-center">Gonzalo Uribe</p>
                                </section>
                                <section className="client-review-text">
                                    <p className="light-font text-center">
                                    Ingeniero comercial, MBAUC. Más de 10 años de experiencia en retail y desde el 2021 gerente comercial en corredora de propiedades boutique.
                                    </p>
                                </section>
                            </div>
                            <div className="equipo-card p-4 d-flex flex-column align-items-center justify-content-start">
                                <section className="mb-2 mt-3 d-flex flex-column align-items-center">
                                    <img className="review-person-img" src={mario} />
                                    <p className="light-font client-name mt-1 text-center">Mario Lipari</p>
                                </section>
                                <section className="client-review-text">
                                    <p className="light-font text-center">
                                    Ingeniero Comercial, MBAUC.  Más de 15 años de experiencia en empresas de servicios, en consultoría, sector financiero y salud.
                                    </p>
                                </section>
                            </div>
                </div>
              {/* <Container className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="light-font mt-5">El Equipo Fundador!</h1>
                        <Col md={6} xl={3} className="mb-3 d-flex align-items-center justify-content-center">
                            <div className="p-3 d-flex flex-column align-items-center justify-content-center">
                                <section className="mb-2 d-flex flex-column align-items-center">
                                    <img className="review-person-img" src={benja} />
                                    <p className="light-font client-name mt-1 text-center">Benjamín Smith</p>
                                </section>
                                <section className="client-review-text">
                                    <p className="light-font text-center">
                                    Ingeniero Comercial con Máster en Dirección Estratégica de Ventas, cuenta con una amplia trayectoria en el mundo de Retail, con enfoque en áreas comerciales y ecommerce.
                                    </p>
                                </section>
                            </div>
                        </Col>
                        <Col md={6} xl={3} className="mb-3 d-flex align-items-center justify-content-center">
                            <div className="p-3 d-flex flex-column align-items-center justify-content-center">
                                <section className="mb-2 d-flex flex-column align-items-center">
                                    <img className="review-person-img" src={gonzalo} />
                                    <p className="light-font client-name mt-1 text-center">Gonzalo Uribe</p>
                                </section>
                                <section className="client-review-text">
                                    <p className="light-font text-center">
                                    Ingeniero comercial, MBAUC. Más de 10 años de experiencia en retail y desde el 2021 gerente comercial en corredora de propiedades boutique.
                                    </p>
                                </section>
                            </div>
                        </Col>
                        <Col md={6} xl={3} className="mb-3 d-flex align-items-center justify-content-center">
                            <div className="p-3 d-flex flex-column align-items-center justify-content-center">
                                <section className="mb-2 d-flex flex-column align-items-center">
                                    <img className="review-person-img" src={mario} />
                                    <p className="light-font client-name mt-1 text-center">Mario Lipari</p>
                                </section>
                                <section className="client-review-text">
                                    <p className="light-font text-center">
                                    Ingeniero Comercial, MBAUC.  Más de 15 años de experiencia en empresas de servicios, en consultoría, sector financiero y salud.
                                    </p>
                                </section>
                            </div>
                        </Col>
                    </Row>
                </Container> */}
                </div>
        </>
    )
}

export default EquipoFundador