import "./historiaempresa.css";
import alebenja from "/aboutus-imgs/ale-benja-png.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HistoriaEmpresa() {
  return (
    <>
      <div className="mt-5 historia-empresa-container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1>Nuestra Historia</h1>
          <p className="maxvw80 mt-3 text-justify dark-grey-ft">
            Benjamín y Alejandro entraron el 2007 a estudiar Ingeniería
            Comercial en la Universidad Adolfo Ibáñez. Ese año les tocó estar
            juntos en la primera sección y desde ahí que ambos han sido amigos.
            Al terminar el pregrado el 2010, Benja tomó el magister en dirección
            estratégica de ventas, y Alejandro el de finanzas. Así cada uno
            siguió su camino tanto en el retail, como en la banca
            respectivamente. La integración de Gonzalo al equipo de Lever
            comienza mientras él cursaba su MBA, es ahí donde conoció a
            Alejandro a través de una red de ex alumnos de este mismo. A partir
            de esta conexión, Alejandro decidió contactarlo para que lo ayudara
            a gestionar la venta de algunas de sus propiedades, y a través de
            esta experiencia comenzaron a intercambiar ideas para mejorar el
            funcionamiento de este sistema burocrático y demoroso.
          </p>
        </div>
        <Container className="">
          <Row className="mt-4 d-flex align-items-center justify-content-center">
            <Col xs={12} xl={4}>
              <section className="history-section-card d-flex flex-column align-items-center">
                <h2 className="fs-3 fw-bold text-center">
                  Alejandro Longueira Brinkmann
                </h2>
                <p className="text-justify maxvw80 dark-grey-ft">
                  Alejandro partió dedicado al B2B trabajando en Santander antes
                  de hacer su magister en finanzas, y al terminar este postgrado
                  entró al cargo de Analista de Finanzas Corporativa de la
                  corredora de bolsa de Penta. Después paso al área de
                  financiamiento de proyectos en Banco Consorcio y terminó su
                  experiencia financiera en Tanner como Banker del área de
                  estructuración financiera. Desde ahí que lleva emprendiendo
                  junto a su familia en Dutchman Chile.
                </p>
              </section>
            </Col>
            <Col className="text-center" xs={12} xl={4}>
              <section className="history-section-card">
                <img className="benjale-img" src={alebenja} />
              </section>
            </Col>
            <Col xs={12} xl={4}>
              <section className="m-4 history-section-card d-flex flex-column align-items-center">
                <h2 className="fs-3 fw-bold text-center">
                  Benjamín Smith Barriga
                </h2>
                <p className="maxvw80 text-justify dark-grey-ft">
                  Benjamin partió su carrera dedicado al B2C en Cencosud S.A.
                  como category manager de Paris. Después lo llamaron de
                  Empresas La Polar S.A. para ser Product Manager de hombres,
                  donde llegó a ser gerente de la división de ropa para hombres.
                  Su última experiencia laboral fue en Falabella Retail S.A
                  donde alcanzó el cargo de gerente de línea para las categorías
                  de hombres y deportes en falabella.com.
                </p>
              </section>
            </Col>
          </Row>
        </Container>
        <div className="mb-5 d-flex flex-column align-items-center justify-content-center">
          <section className="m-3">
            <h2 className="fs-3 fw-bold text-center">Gonzalo Uribe Larach</h2>
            <p className="maxvw80 text-justify dark-grey-ft">
              Gonzalo Uribe estudió Ingeniería Comercial en la Universidad del
              Desarrollo. Luego realizo un Magister en Negocios Internacionales
              en Australia y su más reciente estudio realizado fue un MBA en la
              Pontificia Universidad Católica de Chile en el 2023. En su
              trayectoria laboral, Gonzalo cuenta con una experiencia de casi 8
              años con el grupo Cencosud, trabajando en diferentes áreas como
              fidelidad de clientes y Product Manager de Easy en electro hogar,
              logrando desarrollar de manera significativa su expertise en el
              area de relaciones con clientes tanto internos como finales de la
              empresa. Su última experiencia laboral fue desarrollándose como
              Gerente Comercial en una Corredora de Propiedades Boutique,
              certificado por la ACOP, lo que le permite tener un profundo
              conocimiento sobre los procedimientos en el mundo inmobiliario en
              compra y venta de una propiedad.
            </p>
          </section>
        </div>
        <div className="bg-color-soft-green p-5 d-flex flex-column align-items-center justify-content-center">
          <section>
            <h2 className="fw-bold text-center">Uniendo Fuerzas</h2>
            <p className="maxvw80 text-justify dark-grey-ft">
              Hoy unen sus fuerzas para armar Lever, la primera Startup de
              estructuración financiera. Benjamín, con su trayectoria B2C, tiene
              un conocimiento tremendo para aportar a la llegada directa de los
              clientes y poder ofrecer así productos que solucionen la
              problemática con que se enfrentan hoy los clientes. Alejandro
              tiene un gran conocimiento en la estructuración de pasivos para
              que sus clientes puedan tener deudas alineadas a sus riesgos
              implícitos y flujos proyectados. Por último, Gonzalo trae consigo
              toda su experiencia en el mundo inmobiliario, además de conocer y
              entender a profundidad los dolores y necesidades de los clientes.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default HistoriaEmpresa;
