import "./news.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";

import pitch3 from "/news-imgs/pitch3.jpg";

function NoticiasMain() {
  return (
    <>
      <div className="p-5 d-flex flex-column align-items-center">
        <h1>Noticias y Más!</h1>
        <div className="d-flex flex-column align-items-center">
          <section className="border d-flex align-items center">
            <button className="news-btn">LeverNews</button>
            <button className="news-btn">Actualidad</button>
            <button className="news-btn">Cultura Laboral</button>
            <button className="news-btn">Todas</button>
          </section>
          <section className="d-flex align-items-center justify-content-center">
            <Container className="d-flex align-items-center justify-content-center">
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
          </section>
        </div>
      </div>
    </>
  );
}

export default NoticiasMain;
