import { FaHandsHelping } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import "./pasos.css";

function Pasos() {
  return (
    <>
      <div class="container-timeline d-flex justify-content-center">
        <div class="timeline">
          <div class="timeline-container primary">
            <div class="timeline-icon">
              <FaHandsHelping className="pb-1" />
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge fs-5">Paso #1</span>
              </h4>
              <p className="fs-4 fw-bold main-green-font">Compramos Tu Propiedad</p>
              <p className="dark-grey-ft">
                Compramos tu propiedad por el monto que se adeuda del crédito
                hipotecario.
              </p>
            </div>
          </div>
          <div class="timeline-container danger">
            <div class="timeline-icon">
                <FaThumbsUp className="fs-4 mb-2"/>
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge fs-5">Paso #2</span>
              </h4>
              <p className="fs-4 fw-bold main-green-font">No Mas Dividendos!</p>
              <p className="dark-grey-ft" >Dejas de pagar dividendos por hasta 24 meses.</p>
            </div>
          </div>
          <div class="timeline-container success">
            <div class="timeline-icon">
                <MdApartment className="mb-2" />
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge fs-5">Paso #3</span>
              </h4>
              <p className="fs-4 fw-bold main-green-font">La Vendemos</p>
              <p className="dark-grey-ft" >Gestionamos y vendemos tu propiedad.</p>
            </div>
          </div>
          <div class="timeline-container warning">
            <div class="timeline-icon">
                {/* <RiMoneyDollarCircleFill className="mb-1" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="bi bi-coin mb-1" viewBox="0 0 16 16">
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                </svg>
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge fs-5">Paso #4</span>
              </h4>
              <p className="fs-4 fw-bold main-green-font">Tu Ganas</p>
              <p className="dark-grey-ft">
                Al vender la propiedad, recibes la diferencia entre el valor de
                venta y la deuda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pasos;
