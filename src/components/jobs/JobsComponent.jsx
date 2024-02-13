import JobsForm from "./JobsForm"
import './jobs.css'

function WorkComponent() {

    return(
        <>
        <div className="contact-page-container d-flex flex-column justify-content-center align-items-center">
            <h1 className="mt-5 text-white">Trabaja con nosotros</h1>
            <section className="d-flex flex-column align-items-center">
                <div className="contact-text-container text-center mt-1">
                    <p className="text-white fw-semibold">¿Te enamoraste de lo que hacemos y de nuestra cultura laboral ? 😍Contratamos sólo a Rockstars en lo que hacen, buscamos a l@s cracks! Escribenos y te consideraremos para formar parte del Dream Team. 🙌🏻 🚀</p>
                </div>
                <JobsForm />
            </section>
        </div>
        </>
    )
}

export default JobsComponent