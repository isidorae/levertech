import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SiTrustpilot } from "react-icons/si";
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlineHandshake } from "react-icons/md";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import { PiCubeTransparentLight } from "react-icons/pi";
import { FaTreeCity } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";

import ValorCard from './ValorCard'

function ValoresItems() {


    return(
        <>
            <div className="m-5 d-flex flex-column align-items-center justify-content-center">
                <h1 className="text-center">Nuestros Valores</h1>
                <div className="m-5">
                <Container>
                    <Row>
                        <ValorCard
                        icon={<SiTrustpilot className="fs-2 main-green-font" />}
                        valor="Confianza"
                        text={"Construir experiencias positivas con los clientes y entre los colaboradores para trabajar hacia objetivos comunes."}
                        />
                        <ValorCard
                        icon={<FaHandsHelping  className="fs-2 main-green-font" />}
                        valor="Integridad"
                        text={"Construir experiencias positivas con los clientes y entre los colaboradores para trabajar hacia objetivos comunes."}
                        />
                        <ValorCard
                        icon={<FaHandsHoldingCircle className="fs-2 main-green-font" />}
                        valor="Colaboración"
                        text={"Fomentar un ambiente de trabajo multidisciplinario y colaborativo."}
                        />
                        <ValorCard
                        icon={<AiOutlineSafety className="fs-2 main-green-font" />}
                        valor="Seguridad"
                        text={"Garantizar la seguridad de la información obtenida."}
                        />
                        <ValorCard
                        icon={<FaPeopleRoof className="fs-2 main-green-font" />}
                        valor="Desarrollo Profesional"
                        text={"Ofrecer oportunidades para el desarrollo y crecimiento íntegro de nuestros empleados."}
                        />
                        <ValorCard
                        icon={<MdOutlineHandshake className="fs-2 main-green-font" />}
                        valor="Compromiso"
                        text={"Entregar soluciones tangibles y eficientes a nuestros clientes."}
                        />
                        <ValorCard
                        icon={<PiCubeTransparentLight className="fs-2 main-green-font" />}
                        valor="Transparencia"
                        text={"Las acciones, decisiones y operaciones de la empresa se comunican con apertura y claridad,  fomentando la confianza, honestidad e integridad."}
                        />
                        <ValorCard
                        icon={<FaTreeCity className="fs-2 main-green-font" />}
                        valor="Responsabilidad Social"
                        text={"Contribuir como empresa positivamente a la sociedad y al medio ambiente."}
                        />
                        <ValorCard
                        icon={<LuHeartHandshake className="fs-2 main-green-font" />}
                        valor="Cercanía"
                        text={"Construir relaciones sólidas con nuestros clientes, colaboradores y proveedores, basadas en la transparencia y fidelidad."}
                        />
                    </Row>
                </Container>
                </div>
            </div>
        </>
    )
}

export default ValoresItems