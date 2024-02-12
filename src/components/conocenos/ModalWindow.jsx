import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import './conocenos.css'

function ModalWindow({title, text, show, onHide, buttonLink, path}) {

    return(
        <>
         <Modal
        size="lg"
        show={show}
        onHide={onHide}
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
            <section>
              <p>{text}</p>
            </section>
            <section>
            <Link className="" to={path}>{buttonLink}</Link>
            </section>
        </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default ModalWindow