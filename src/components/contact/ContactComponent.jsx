import ContactForm from "./ContactForm"
import './contact.css'

function ContactComponent() {

    return(
        <>
        <div className="contact-page-container d-flex flex-column justify-content-center align-items-center">
            <h1 className="mt-5 text-white">Contáctanos</h1>
            <section className="d-flex flex-column align-items-center">
                <div className="contact-text-container text-center mt-3">
                    <p className="dark-grey-ft">Rellena el siguiente formulario y te contáctaremos lo antes posible para ayudarte a encontrar una solución.</p>
                </div>
                <ContactForm />
            </section>
        </div>
        </>
    )
}

export default ContactComponent