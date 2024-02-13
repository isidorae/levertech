import Col from 'react-bootstrap/Col';

function MisionVisionCard({title,  func, imgclassname}) {

    return(
        <>
        <Col xs={12} md={12} lg={4} className="col-mision-container">
          <section className={`${imgclassname}`}>
                <div className="mision-opacity  d-flex flex-column align-items-center justify-content-center">
                    <div>
                        <p className="fs-2 text-white fw-bold">{title}</p>
                    </div>
                    <div>
                        {func}
                    </div>
                </div>
            </section>
        </Col>
        </>
    )
}

export default MisionVisionCard