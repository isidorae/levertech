import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import maitencillo from '/aboutus-imgs/round-fotogrupal.png'
import reunion from '/aboutus-imgs/teamsonline.jpg'


function InfoCulturaLaboral() {

    return(
        <>
        <div className="cultura-heroimg">
            <div className="cultura-opacity d-flex flex-column align-items-center justify-content-center">
                <section className="maxvw80 text-justify">
                    <h1 className="fw-bold text-white text-center shadow-text">Conoce Nuestra Cultura Laboral!</h1>
                    <p className="text-white shadow-text">En Lever, vivimos la experiencia de ser una empresa que marca la diferencia, sabemos que no hay un mejor lugar para trabajar!!. Cada día es una aventura llena de aprendizaje y crecimiento. ¡Nos encanta lo que hacemos y se nota! <br/>Nuestro objetivo es claro, aspiramos a ser reconocidos como "The greatest place to work". Trabajamos en equipo, nos divertimos y valoramos cada momento juntos. Aquí en LeverProp, las risas son parte esencial de nuestra cultura laboral, nos preocupamos genuinamente por el bienestar de nuestro equipo, creamos un ambiente relajado y agradable. La flexibilidad y el apoyo mutuo son clave para alcanzar un desempeño excepcional. ¡Aquí cada uno puede brillar!.</p>
                </section>
            </div>
        </div>
        <div className="p-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fw-bold fs-1">Trabajo en Equipo 🤝</h2>
            <section className="maxvw80 text-justify mb-3">
                <p className="dark-grey-ft ">Nuestra cultura se sustenta en valores sólidos como la confianza y cercanía  generada con nuestros trabajadores. Creamos un espacio de colaboración mutua donde cada uno puede desarrollarse de manera íntegra. ¡¡Trabajar con Lever es como tener vacaciones ilimitadas!!</p>
                <p className="dark-grey-ft">Como empresa queremos contribuir significativamente a la sociedad y al medioambiente. Sabemos que estos valores, junto a la seguridad,  transparencia, compromiso y la integridad, no solo nos definen sino que también nos orientan en cada acción que emprendemos.</p>
            </section>
        </div>
        <div className="cultura-second-heroimg">
            <div className="cultura-second-opacity d-flex flex-column align-items-center justify-content-center">
                <section className="maxvw80 text-justify">
                    <p className="text-white fw-bold fs-4 text-center shadow-text">En LeverProp, somos más que una empresa, somos una comunidad unida por la pasión de hacer las cosas bien y marcar la diferencia. <br />Aquí, cada uno encuentra su lugar y su voz siempre es escuchada.</p>
                </section>
            </div>
        </div>
        <div className="mt-5 mb-5 d-flex flex-column align-items-center">
            <h2 className="maxvw80 fw-bold fs-1 text-center">Recreación y Monthly Pass! 🏄🏼‍♂️🪂</h2>
            <div className="">
            <Container className="d-flex align-items-center justify-content-center">
                <Row className="d-flex align-items-center justify-content-center">
                    <Col md={10} lg={8} className="d-flex flex-column align-items-center">
                    <section className="maxvw80 mt-2">
                    <p className="dark-grey-ft text-justify">En enero del 2023 ingresaron los primeros rockstar al equipo Lever y es por esto que desde ese mismo momento creamos los “Monthly Pass”. Con esto queremos crear instancias mensuales de recreación que fomenten la unión del equipo fuera de un ambiente de oficina.</p><br/>
                    <p className="dark-grey-ft text-justify">Realizamos distintas actividades de entretenimiento o simplemente trabajamos bajo un ambiente natural distinto al habitual que es dentro de una oficina. Creemos firmemente en que realizar este tipo de actividades no solo ayuda a mejorar la unión sino que también expande la creatividad y el desarrollo de ideas.</p>
                </section>
                    </Col>
                    <Col md={10} lg={4} className="text-center d-flex flex-column align-items-center">
                    <section className="maxvw80">
                    <img className="maitencillo-img mt-2" src={maitencillo} />
                </section>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
        <div className="">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <section className="p-5">
                    <h2 className="fs-1 fw-bold text-center ">Reuniones Matutinas ☕️😸</h2>
                    <p className="fs-3 fw-bolddark-grey-ft text-center">¡Partir el día con una sonrisa te ayuda a trabajar mejor!</p>
                </section>
                <section>
                    <img className="img-fluid" src={reunion}/>
                </section>
            </div>
        </div>
        </>
    )
}

export default InfoCulturaLaboral