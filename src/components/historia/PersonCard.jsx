import Col from "react-bootstrap/Col";

function PersonCard({img, name, text}) {
  return (
    <>
      <Col xs={12} sm={6} md={4}>
        <div className="equipo-small-card p-3 d-flex flex-column align-items-center justify-content-center">
          <section className="mt-3">
            <img className="equipo-card-img" src={img} />
          </section>
          <section className="mt-2 d-flex flex-column align-items-center justify-content-center">
            <p className="fs-5 dark-grey-ft  fw-bold text-center">
              {name}
            </p>
            <p className="dark-grey-ft text-center">{text}</p>
          </section>
        </div>
      </Col>
    </>
  );
}

export default PersonCard;
