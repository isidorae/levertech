import './homeboxes.css'
import { Link } from 'react-router-dom'

function FourthComponent() {

    return(
        <>
        <div className="contact-img-container">
            <div className="contact-img-opacity d-flex align-items-center justify-content-center">
                <div className="contact-img-content">
                    <section className="fourth-comp-text">
                    <h1 className="contact-section-title grey-font mt-4 text-center">Te podemos ayudar desde Hoy. <br/><Link to="/contacto" className="light-font bold-text text-decoration-none">¡Contáctanos!</Link></h1>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default FourthComponent

