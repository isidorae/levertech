import { Link } from "react-router-dom";

function HeroImgService() {
  return (
    <>
      <div className="heroimg-service-container">
        <div className="heroimg-service-opacity d-flex align-items-center justify-content-center">
          <div className="heroimg-service-content">
            <section className="text-center">
                <p className="fw-bold fs-3 text-white shadow-text p-3">No es magia.. Es Apartamentaje!</p>
                <Link to="/contacto"><button className="main-btn">LO QUIERO!</button></Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroImgService;
