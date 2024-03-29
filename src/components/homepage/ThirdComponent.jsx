import { Link } from 'react-router-dom'
import creditimg from '/homepage-imgs/credito-consumo.jpg'
import './homeboxes.css'

function ThirdComponent() {

    return(
        <>
        <div className="white-bg-image-slide">
            <div className="third-comp-container d-flex flex-wrap align-items-center justify-content-center">
                <section className="order-0 order-md-0 d-flex flex-column align-items-center">
                    <p className="third-component-text grey-font mt-4">
                    ¿<b>Cómo me libero</b> de mi crédito hipotecario actual<br/>para tomar otro y mudarme?
                    <br/> 
                    ¡Tenemos la respuesta!
                    </p>
                    <Link as={Link} to="/como-funciona"><button className="mt-4 main-btn">Haz click aquí</button></Link>
                </section>
                <section className="order-2 order-md-2">
                    <img className="credit-img mt-4" alt="Image by storyset on Freepik" src={creditimg}></img>
                </section>
            </div>
        </div>
        </>
    )
}

export default ThirdComponent