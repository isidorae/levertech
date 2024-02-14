import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

function CalendarComp({ asesor }) {

    let asesorNAME;

    if (asesor == "alejandro"){
        asesorNAME = "Alejandro"
    } 
    if (asesor == "benjamin") {
        asesorNAME = "Benjamín"
    }
    if (asesor == "gonzalo") {
        asesorNAME = "Gonzalo"
    }

  const minDate = addDays(new Date(), 1);
  const [date, setDate] = useState(minDate);

  console.log(date)

  let SELECTED_DateToString = JSON.stringify(date);
  let SELECTED_year = SELECTED_DateToString.slice(1, 5);
  let SELECTED_month = SELECTED_DateToString.slice(6, 8);
  let SELECTED_day = SELECTED_DateToString.slice(9, 11);

  let SELECT_day_week = JSON.stringify(date.getDay())
  let SELECT_day_string;
  let SELECT_month_string;
  console.log(SELECT_day_week)

  switch(SELECT_day_week){
    case "1":
        SELECT_day_string = "Lunes"
        break;
    case "2":
        SELECT_day_string = "Martes"
        break;
    case "3":
        SELECT_day_string = "Miércoles"
        break;
    case "4":
        SELECT_day_string = "Jueves"
        break;
    case "5":
        SELECT_day_string = "Viernes"
        break;
    default:
        SELECT_day_string = "fin de semana."
        break;
  }

  switch(SELECTED_month){
    case "01":
        SELECT_month_string = "Enero"
        break;
    case "02":
        SELECT_month_string = "Febrero"
        break;
    case "03":
        SELECT_month_string = "Marzo"
        break;
    case "04":
        SELECT_month_string = "Abril"
        break;
    case "05":
        SELECT_month_string = "Mayo"
        break;
    case "06":
        SELECT_month_string = "Junio"
        break;
    case "07":
        SELECT_month_string = "Julio"
        break;
    case "08":
        SELECT_month_string = "Agosto"
        break;
    case "09":
        SELECT_month_string = "Septiembre"
        break;
    case "10":
        SELECT_month_string = "Octubre"
        break;
    case "11":
        SELECT_month_string = "Noviembre"
        break;
    case "12":
        SELECT_month_string = "Diciembre"
        break;
    default:
        SELECT_day_string = "fin de semana."
        break;
  }


  console.log(SELECT_day_string)

  return (
    <>
      <div className="mt-2 ms-3">
            <Link to="/mi-perfil/agendar"><span className="fst-italic fw-bold dark-grey-ft breadcrumb-ft">/Volver a Asesores</span></Link>
      </div>
      <div className="m-5 d-flex flex-column align-items-center justify-content-center">
        <h1>Calendario {asesorNAME}</h1>
        <section>
          <DatePicker
            showIcon
            selected={date}
            onChange={(date) => setDate(date)}
            minDate={minDate}
            maxDate={addDays(new Date(), 8)}
            filterDate={(date) => {
              // Disable weekends (Saturday and Sunday)
              return date.getDay() !== 0 && date.getDay() !== 6;
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <mask id="ipSApplication0">
                  <g
                    fill="none"
                    stroke="#fff"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  >
                    <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                    <path
                      fill="#fff"
                      d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                    ></path>
                  </g>
                </mask>
                <path
                  fill="currentColor"
                  d="M0 0h48v48H0z"
                  mask="url(#ipSApplication0)"
                ></path>
              </svg>
            }
          />
        </section>
        <section className="mt-4">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <section className="d-flex flex-column align-items-center justify-content-center">
                <h2 className="fs-1 fw-bold">Horas disponibles</h2>
                <p>Para el día {SELECT_day_string} {SELECTED_day} de {SELECT_month_string}.</p>
                <p className="fs-2 fw-bold grey-font mb-3">{SELECTED_day}/{SELECTED_month}/{SELECTED_year}</p>
                </section>
                <Container>
                    <Row>
                        <Col>
                            <button className="agendar-btn">9.00</button>
                            <button disabled={true} className="agendar-btn">10.00</button>
                            <button className="agendar-btn">11.00</button>
                            <button className="agendar-btn">12.00</button>
                            <button className="agendar-btn">13.00</button>
                            <button className="agendar-btn">14.00</button>
                            <button className="agendar-btn">15.00</button>
                            <button className="agendar-btn">16.00</button>
                            <button className="agendar-btn">17.00</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>

      </div>
    </>
  );
}

export default CalendarComp;
