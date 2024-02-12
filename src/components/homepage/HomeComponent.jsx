import ClientReviews from "./ClientReviews"
import FourthComponent from "./FourthComponent"
import HeroImg from "./HeroImg"
import SecondComponent from "./SecondComponent"
import ThirdComponent from "./ThirdComponent"
import Beneficios from "../como-funciona/Beneficios"
import './heroimg.css'
import EquipoFundador from "./EquipoFundador"

function HomeComponent() {

    return(
        <>
        <div>
            <section>
                <HeroImg />
                <SecondComponent />
                <ThirdComponent />
                <div className="mt-5 mb-3 bg-color-light">
                <Beneficios 
                background={"bg-color-white"}/>
                </div>
                <ClientReviews />
                <EquipoFundador />
                <FourthComponent />
            </section>
        </div>
        </>
    )
}

export default HomeComponent