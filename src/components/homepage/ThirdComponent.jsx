import creditimg from '/public/homepage-imgs/credito-consumo.jpg'
import './homeboxes.css'

function ThirdComponent() {

    return(
        <>
        <div className="white-bg-image-slide">
            <div className="third-comp-container d-flex flex-wrap align-items-center justify-content-center">
                <section className="order-0 order-md-0">
                    <p className="third-component-text grey-font mt-4">¿Piensas pedir un crédito de consumo? <br/> ¡Olvidate! </p>
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