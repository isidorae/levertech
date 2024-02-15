

function UserDataCard({data, value}) {

    return(
        <>
        <section className="user-data-container">
                    <p className="dark-grey-ft"><b>{data}</b>: {value}</p>
        </section>
        </>
    )
}

export default UserDataCard