import './equipo.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ale from '/equipo/el_palanca.png'
import benja from '/equipo/benja_smith.png'
import gonzalo from '/equipo/gonzalo_uribe.png'
import mario from '/equipo/mario_lipari.png'
import hans from '/equipo/hans.png'
import cristian from '/equipo/cristian_salas.png'
import isi from '/equipo/isi_erra.png'
import tere from '/equipo/tere_barros.png'

function EquipoTrabajo(){


    return(
        <>
        <div className="text-center">
            <h1 className="mt-5">Los Rockstars! 🚀🤘🏼</h1>
            <Container>
                <Row>
                    <Col>
                        <div className="equipo-small-card p-3 d-flex flex-column align-items-center justify-content-center">
                            <section className="mt-3">
                                <img className="equipo-card-img" src={ale} />
                            </section>
                            <section className="mt-2 d-flex flex-column align-items-center justify-content-center">
                                <p className="fs-5 dark-grey-ft  fw-bold text-center">Alejandro Longueira</p>
                                <p className="dark-grey-ft text-center">Co-founder & CEO</p>
                            </section>
                        </div>
                    </Col>
                    <Col>
                        <div className="equipo-small-card p-3 d-flex flex-column align-items-center justify-content-center">
                            <section className="mt-3">
                                <img className="equipo-card-img" src={benja} />
                            </section>
                            <section className="mt-2 d-flex flex-column align-items-center justify-content-center">
                                <p className="fs-5 dark-grey-ft  fw-bold text-center">Benjamín Smith</p>
                                <p className="dark-grey-ft text-center">Co-founder & CCO</p>
                            </section>
                        </div>
                    </Col>
                    <Col>
                        <div className="equipo-small-card p-3 d-flex flex-column align-items-center justify-content-center">
                            <section className="mt-3">
                                <img className="equipo-card-img" src={gonzalo} />
                            </section>
                            <section className="mt-2 d-flex flex-column align-items-center justify-content-center">
                                <p className="fs-5 dark-grey-ft  fw-bold text-center">Gonzalo Uribe</p>
                                <p className="dark-grey-ft text-center">Co-founder & CGO</p>
                            </section>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="equipo-small-card p-3 d-flex flex-column align-items-center justify-content-center">
                            <section className="mt-3">
                                <img className="equipo-card-img" src={mario} />
                            </section>
                            <section className="mt-2 d-flex flex-column align-items-center justify-content-center">
                                <p className="fs-5 dark-grey-ft  fw-bold text-center">Mario Lipari</p>
                                <p className="dark-grey-ft text-center">Co-founder & CCO</p>
                            </section>
                        </div>
                    </Col>
                    <Col>
                        <div className="equipo-small-card p-3 d-flex flex-column align-items-center justify-content-center">
                            <section className="mt-3">
                                <img className="equipo-card-img" src={hans} />
                            </section>
                            <section className="mt-2 d-flex flex-column align-items-center justify-content-center">
                                <p className="fs-5 dark-grey-ft  fw-bold text-center">Hans Scherer</p>
                                <p className="dark-grey-ft text-center">Analista de Finanzas</p>
                            </section>
                        </div>
                    </Col>
                    <Col>
                        <div className="equipo-small-card p-3 d-flex flex-column align-items-center justify-content-center">
                            <section className="mt-3">
                                <img className="equipo-card-img" src={cristian} />
                            </section>
                            <section className="mt-2 d-flex flex-column align-items-center justify-content-center">
                                <p className="fs-5 dark-grey-ft  fw-bold text-center">Cristian Salas</p>
                                <p className="dark-grey-ft text-center">Software Engineer</p>
                            </section>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="equipo-small-card p-3 d-flex flex-column align-items-center justify-content-center">
                            <section className="mt-3">
                                <img className="equipo-card-img" src={isi} />
                            </section>
                            <section className="mt-2 d-flex flex-column align-items-center justify-content-center">
                                <p className="fs-5 dark-grey-ft  fw-bold text-center">Isidora Errázuriz</p>
                                <p className="dark-grey-ft text-center">Full Stack Developer</p>
                            </section>
                        </div>
                    </Col>
                    <Col>
                        <div className="equipo-small-card p-3 d-flex flex-column align-items-center justify-content-center">
                            <section className="mt-3">
                                <img className="equipo-card-img" src={tere} />
                            </section>
                            <section className="mt-2 d-flex flex-column align-items-center justify-content-center">
                                <p className="fs-5 dark-grey-ft  fw-bold text-center">Teresita Barros</p>
                                <p className="dark-grey-ft text-center">Analista de Marketing</p>
                            </section>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}

export default EquipoTrabajo