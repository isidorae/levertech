
function ContactForm() {

    return(
        <>
        <div className="contact-form-card mt-4 mb-5">
            <form className="d-flex flex-column">
                <label className="mt-2">Nombre Completo*</label>
                <input type="text" placeholder="Nombre completo"/>
                <label className="mt-2">Correo*</label>
                <input type="email" placeholder="Correo"/>
                <label className="mt-2">¿Cuánto debe de su crédito hipotecario?*</label>
                <input type="email" placeholder="Ej: 9.000 UF"/>
                <label className="mt-2">Quiero vender para*</label>
                <select name="select">
                    <option value="value1" selected className="option-input">Comprar</option>
                    <option value="value2">Arrendar</option>
                    <option value="value3">Otro</option>
                </select>
                <label className="mt-2">Mensaje</label>
                <textarea></textarea>
                <button className="mt-2 send-btn">Enviar</button>
            </form>
        </div>
        </>
    )
}

export default ContactForm