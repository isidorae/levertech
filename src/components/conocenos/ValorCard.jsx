import Col from "react-bootstrap/Col";

function ValorCard({valor, text, icon}) {
  return (
    <>
      <Col xs={12} sm={12}  md={6} lg={4} className="d-flex flex-column align-items-center justify-content-center">
        <div className="m-3 valor-card d-flex flex-column align-items-center">
          <section className="mb-1">
            {icon}
          </section>
          <section className="d-flex flex-column align-items-center">
            <p className="fs-3 text-center fw-bold main-green-font">
              {valor}
            </p>
            <p className="text-center dark-grey-ft">
              {text}
            </p>
          </section>
        </div>
      </Col>
    </>
  );
}

export default ValorCard