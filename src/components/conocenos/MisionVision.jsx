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
        <div className="mision-grid">
            <section className="mision-container">
                <div className="mision-opacity  d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <p className="fs-2 text-white fw-bold">Nuestra Misión</p>
                    </div>
                    <div>
                        <Link><button onClick={() => setModalMision(true)} className="main-btn">Ver más</button></Link>
                    </div>
                </div>
            </section>
            <section className="mision-container">
                <div className="mision-opacity d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <p className="fs-2 text-white fw-bold">Nuestra Visión</p>
                    </div>
                    <div>
                        <Link><button onClick={() => setModalVision(true)}  className="main-btn">Ver más</button></Link>
                    </div>
                </div>
            </section>
            <section className="mision-container">
                <div className="mision-opacity  d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <p className="fs-2 text-white fw-bold">Nuestros Valores</p>
                    </div>
                    <div>
                        <Link><button onClick={() => setModalValues(true)}  className="main-btn">Ver más</button></Link>
                    </div>
                </div>
            </section>
        </div>
        <Modal
        size="lg"
        show={modalMision}
        onHide={() => setModalMision(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className="d-flex align-items-center"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            MISIÓN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex flex-column">
            <p>
                Nuestra misión es transformar la estructura de deuda actual de nuestros clientes,
                entregando soluciones financieras que generen valor, sean eficientes, seguras e innovadoras,
                disminuyendo la carga económica hipotecaria de cada uno de ellos.
            </p>
        </div>
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={modalVision}
        onHide={() => setModalVision(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className="d-flex align-items-center"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            VISIÓN
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex flex-column">
            <p>
                Ser líder innovador en soluciones hipotecarias seguras y ágiles, transformando la forma en que la sociedad enfrenta sus desafíos financieros.
            </p>
        </div>
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={modalValues}
        onHide={() => setModalValues(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className="d-flex align-items-center"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            VALORES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex flex-column">
            <p>
            LeverProp se guía por valores como la confianza, la integridad, la colaboración, la seguridad, el desarrollo profesional, el compromiso, la responsabilidad social y la cercanía. Estos principios definen nuestra cultura organizacional y orientan todas las acciones de la empresa.
            </p>
            <Link to="/valores"><button className="modal-btn align-self-start mt-4">Ver más</button></Link>
        </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default MisionVision