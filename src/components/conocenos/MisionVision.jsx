import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MisionVisionCard from './MisionVisionCard';
import ModalWindow from './ModalWindow';

import { useState } from 'react';
import './conocenos.css'
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';


function MisionVision() {

    const [modalMision, setModalMision] = useState(false);
    const [modalVision, setModalVision] = useState(false);
    const [modalValues, setModalValues] = useState(false);
    
    return(
        <>
        <Container className="mision-vision-container" fluid>
          <Row className="row-mision-container">
            <MisionVisionCard
            imgclassname={"mision-container"}
            title={"Nuestra Misión"}
            func={<Link><button onClick={() => setModalMision(true)} className="main-btn">Ver más</button></Link>}
            />
            <MisionVisionCard
            imgclassname={"vision-container"}
            title={"Nuestra Visión"}
            func={<Link><button onClick={() => setModalVision(true)} className="main-btn">Ver más</button></Link>}
            />
            <MisionVisionCard
            imgclassname={"values-container"}
            title={"Nuestros Valores"}
            func={<Link><button onClick={() => setModalValues(true)} className="main-btn">Ver más</button></Link>}
            />
          </Row>
        </Container>
        <ModalWindow
          title={"MISIÓN"}
          text={"Nuestra misión es transformar la estructura de deuda actual de nuestros clientes, entregando soluciones financieras que generen valor, sean eficientes, seguras e innovadoras,disminuyendo la carga económica hipotecaria de cada uno de ellos."}
          show={modalMision}
          onHide={() => setModalMision(false)}
        />
        <ModalWindow
          title={"VISIÓN"}
          text={"Ser líder innovador en soluciones hipotecarias seguras y ágiles, transformando la forma en que la sociedad enfrenta sus desafíos financieros."}
          show={modalVision}
          onHide={() => setModalVision(false)}
        />
        <ModalWindow
          title={"VALORES"}
          text={"LeverProp se guía por valores como la confianza, la integridad, la colaboración, la seguridad, el desarrollo profesional, el compromiso, la responsabilidad social y la cercanía. Estos principios definen nuestra cultura organizacional y orientan todas las acciones de la empresa."}
          show={modalValues}
          onHide={() => setModalValues(false)}
          path={"/valores"}
          buttonLink={<button className="modal-btn align-self-start mt-4">Ver más</button>}
        />
        </>
    )
}

export default MisionVision