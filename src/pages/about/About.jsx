import CulturaLaboral from '../../components/conocenos/CulturaLaboral'
import Fundadores from '../../components/conocenos/Fundadores'
import LaEmpresa from '../../components/conocenos/LaEmpresa'
import MisionVision from '../../components/conocenos/MisionVision'
import LosRockstars from '../../components/conocenos/LosRockstars'
function About() {

    return(
        <>
        <div className="full-view-height">
            <LaEmpresa />
            <Fundadores />
            <LosRockstars />
            <CulturaLaboral />
            <MisionVision />
        </div>
        </>
    )
}

export default About