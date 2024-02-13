import NewsCard from "../noticias/NewsCard"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import pitch3 from '/news-imgs/pitch3.jpg'

function LatestNews() {


    return(
        <>
        <div className="m-5 d-flex flex-column align-items-center">
        <h1>Últimas Noticias!</h1>
        <Container>
            <Row>
            <NewsCard
                  path={"/"}
                  img={pitch3}
                  date={"10/1/24"}
                  category={"LeverNews"}
                  title={"¡Tercer y Último Pitch del verano!"}
                  text={
                    "El pasado 23 de enero se realizó nuestro tercer Pitch en formato híbrido, en esta instancia invitamos a grandes.."
                  }
                />
                <NewsCard
                  path={"/"}
                  img={pitch3}
                  date={"10/1/24"}
                  category={"LeverNews"}
                  title={"¡Tercer y Último Pitch del verano!"}
                  text={
                    "El pasado 23 de enero se realizó nuestro tercer Pitch en formato híbrido, en esta instancia invitamos a grandes.."
                  }
                />
                <NewsCard
                  path={"/"}
                  img={pitch3}
                  date={"10/1/24"}
                  category={"LeverNews"}
                  title={"¡Tercer y Último Pitch del verano!"}
                  text={
                    "El pasado 23 de enero se realizó nuestro tercer Pitch en formato híbrido, en esta instancia invitamos a grandes.."
                  }
                />
            </Row>
        </Container>
        </div>
        </>
    )
}

export default LatestNews