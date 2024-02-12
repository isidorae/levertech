import './equipo.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PersonCard from './PersonCard';

import ale from '/equipo/el_palanca.png'
import benja from '/equipo/benja_smith.png'
import gonzalo from '/equipo/gonzalo_uribe.png'
import mario from '/equipo/mario_lipari.png'
import hans from '/equipo/hans.png'
import cristian from '/equipo/cristian_salas.png'
import isi from '/equipo/isi_erra.png'
import tere from '/equipo/tere_barros.png'

function EquipoTrabajo(){


    return(
        <>
        <div className="rockstar-container text-center d-flex flex-column align-items-center">
            <h1 className="mt-5">Los Rockstars! 🚀🤘🏼</h1>
            <Container className="m-5">
                <Row>
                    <PersonCard
                    img={ale}
                    name={"Alejandro Longueira"}
                    text={"Co-founder & CEO"}
                    />
                    <PersonCard
                    img={benja}
                    name={"Benjamín Smith"}
                    text={"Co-founder & CCO"}
                    />
                    <PersonCard
                    img={gonzalo}
                    name={"Gonzalo Uribe"}
                    text={"Co-founder & CGO"}
                    />
                    <PersonCard
                    img={mario}
                    name={"Mario Lipari"}
                    text={"Co-founder & CCO"}
                    />
                    <PersonCard
                    img={hans}
                    name={"Hans Scherer"}
                    text={"Analista de Finanzas"}
                    />
                    <PersonCard
                    img={cristian}
                    name={"Cristian Salas"}
                    text={"Software Engineer"}
                    />
                    <PersonCard
                    img={isi}
                    name={"Isidora Errázuriz"}
                    text={"Full Stack Developer"}
                    />
                    <PersonCard
                    img={tere}
                    name={"Teresita Barros"}
                    text={"Analista de Marketing"}
                    />
                </Row>
            </Container>
        </div>
        </>
    )
}

export default EquipoTrabajo