import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './conocenos.css'

function ModalWindow({title, text}) {

    const [modalShow, setModalShow] = useState(false);

    return(
        <>
         <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className="d-flex align-items-center"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex flex-column">
            <p> {text}
            </p>
            <Link className="d-none" to="/historia"><button className="modal-btn align-self-start mt-4">Ver más</button></Link>
        </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default ModalWindow