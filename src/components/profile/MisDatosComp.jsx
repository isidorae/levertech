import UserDataCard
 from "./UserDataCard"
function MisDatosComp(){

    return(
        <>
        <div className="m-5 d-flex flex-column align-items-center justify-content-center">
            <h1>Mis datos</h1>
            <div className="d-flex flex-column">
                <UserDataCard
                    data={"Nombre"}
                    value={"Isidora"}
                />
                <UserDataCard
                    data={"Apellido"}
                    value={"Sin Datos."}
                />
                <UserDataCard
                    data={"Email"}
                    value={"Email: isi@gmail.com"}
                />
                <UserDataCard
                    data={"Ciudad"}
                    value={"Sin Datos."}
                />
            </div>
        </div>
        </>
    )
}

export default MisDatosComp