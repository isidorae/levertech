import ContactForm from "./ContactForm"
import './contact.css'

function ContactComponent() {

    return(
        <>
        <div className="contact-page-container d-flex flex-column justify-content-center align-items-center">
            
            <ContactForm />
        </div>
        </>
    )
}

export default ContactComponent