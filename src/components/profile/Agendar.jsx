import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AsesorCard from "./AsesorCard";
import { Link } from "react-router-dom";

import ale from "/equipo/el_palanca.png";
import gonzalo from "/equipo/gonzalo_uribe.png";
import benja from "/equipo/benja_smith.png"

function Agendar() {
  return (
    <>
    <div className="mt-2 ms-3">
            <Link to="/mi-perfil"><span className="fst-italic fw-bold dark-grey-ft breadcrumb-ft">/Volver a perfil</span></Link>
        </div>
      <div className="m-5 d-flex flex-column align-items-center justify-content-center">
        <h1 className="mt-3">Selecciona Tu Asesor</h1>
        <Container className="d-flex align-items-center justify-content-center">
          <Row className="d-flex align-items-center justify-content-center" >
            <AsesorCard
            img={ale}
            name={"Alejandro Longueira"}
            text={"Ingeniero comercial con magister en finanzas y MBAUC. Trabajó en Penta corredores de bolsa, Banco Consorcio, Tanner, luego emprendio con su familia con Dutchman. Actualmente es el CEO de Lever."}
            linkedin={"https://www.linkedin.com/in/alejandro-longueira-brinkmann/"}
            calendarpath={"/calendario/alejandro"}
            />
            <AsesorCard
            img={benja}
            name={"Benjamín Smith"}
            text={"Ingeniero comercial con magister en direccion estrategica de ventas. Amplia experiencia en el retail, trabajó en Paris, La Polar y Falabella. Actualmente es el COO de Lever."}
            linkedin={"https://www.linkedin.com/in/benjamin-smith-252ba139/"}
            calendarpath={"/calendario/benjamin"}
            />
            <AsesorCard
            img={gonzalo}
            name={"Gonzalo Uribe"}
            text={"Ingeniero comercial, MBAUC. Más de 10 años de experiencia en retail y desde el 2021 gerente comercial en corredora de propiedades boutique. Actualmente es el CGO de Lever."}
            linkedin={"https://www.linkedin.com/in/gonzalofernandouribelarach/"}
            calendarpath={"/calendario/gonzalo"}
            />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Agendar;
