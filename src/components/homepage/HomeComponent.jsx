import ClientReviews from "./ClientReviews"
import FourthComponent from "./FourthComponent"
import HeroImg from "./HeroImg"
import SecondComponent from "./SecondComponent"
import ThirdComponent from "./ThirdComponent"
import './heroimg.css'

function HomeComponent() {

    return(
        <>
        <div>
            <section>
                <HeroImg />
                <SecondComponent />
                <ThirdComponent />
                <ClientReviews />
                <FourthComponent />
            </section>
        </div>
        </>
    )
}

export default HomeComponent