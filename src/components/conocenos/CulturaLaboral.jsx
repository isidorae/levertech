import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './conocenos.css'
import team from '/aboutus-imgs/leverteam-01.jpg'

function CulturaLaboral() {

    const [modalShow, setModalShow] = useState(false);
    
    return(
        <>
        <div className="linear-gradient-green-bg">
                <section className="d-flex flex-column align-items-center justify-content-between">
                    <div>
                        <h1 className="text-white mt-5">Cultura Laboral</h1>
                    </div>
                    <div>
                        <img className="team-img" src={team} />
                    </div>
                    <div>
                        <button onClick={()=> setModalShow(true)} className="main-btn mt-4 mb-4">Ver más</button>
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
            Cultura Laboral
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex flex-column">
            <p> No hay un mejor lugar para trabajar qué Lever, lo pasamos la filete! Tenemos como objetivo ser "The greatest place to work". Trabajamos en equipo y nos aseguramos de pasarlo bien todos los días. Que no falten las risas!!. Valoramos el bienestar de cada uno de los miembros del equipo, creamos un ambiente relajado, flexible y agradable para trabajar. Nos apoyamos mutuamente y el compromiso es clave para lograr un desempeño excepcional que saque la mejor versión de cada uno. Conoce la experiencia de trabajo única que está a otro Lever!! .🚀 🌟
            </p>
            <Link to="/cultura-laboral"><button className="modal-btn align-self-start mt-4">Ver más</button></Link>
        </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default CulturaLaboral