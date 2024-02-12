import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './conocenos.css'

function Fundadores() {

    const [modalShow, setModalShow] = useState(false);
    
    return(
        <>
        <div className="linear-gradient-green-bg-right fundadores-container">
            <section className="d-flex flex-column align-items-center fundadores-img justify-content-between">
                <div>
                    <h1 className="text-white mt-3">Acerca de Nosotros</h1>
                </div>
                <div>
                    <button onClick={() => setModalShow(true)} className="main-btn mb-4">Ver más</button>
                </div>
            </section>
        </div>
        <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className="d-flex align-items-center"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            FUNDADORES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex flex-column">
            <p> Alejandro Longueira y Benjamín Smith, ambos Ingenieros Comerciales,
        luego de una gran trayectoria laboral decidieron unir fuerzas para crear LeverProp el 2023.
        Alejando desde el punto de vista financiero, ya que además de tener un magíster en finanzas,
        se dedicó estos últimos años al área financiera en instituciones bancarias,
        demostrando una amplia experiencia en la estructuración estratégica de pasivos para los clientes.
        Por su parte Benjamín con un magister en dirección estratégica de ventas, se dedicó estos últimos
        años a ejercer su profesión en grandes empresas de retail, logrando obtener un conocimiento profundo
        en como generar conexiones directas con clientes.
            </p>
            <Link to="/historia"><button className="modal-btn align-self-start mt-4">Conoce toda la historia!</button></Link>
        </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default Fundadores