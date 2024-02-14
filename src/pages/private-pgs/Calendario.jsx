import CalendarComp from "../../components/profile/CalendarComp";
import { useParams } from "react-router-dom";



function Calendario(){

    const { asesor } = useParams()
    console.log(asesor)

    return(
        <>
        <div className="full-view-height">
            <CalendarComp
            asesor={asesor}
            />
        </div>
        </>
    )
}

export default Calendario