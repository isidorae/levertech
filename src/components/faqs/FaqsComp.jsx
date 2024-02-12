import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "./AccordionItem";

function FaqsComp() {
  return (
    <>
      <div>
        <h1 className="m-5 text-center">Preguntas Frecuentes</h1>
        <div className="m-5">
        <Accordion >
            <AccordionItem
            keyNumber={"0"}
            header={"#1 ¿Qué es el apartamentaje?"}
            text={"Es un instrumento financiero en el cual LeverProp hace un rescate del patrimonio inmobiliario del cliente, comprando la deuda y sacando el activo de su balance. Esto permite al cliente liberarse de la carga mensual del dividendo, mientras vendemos la propiedad, protegiendo su patrimonio."}
            />
            <AccordionItem
            keyNumber={"1"}
            header={"#1 ¿Qué es el apartamentaje?"}
            text={"Es un instrumento financiero en el cual LeverProp hace un rescate del patrimonio inmobiliario del cliente, comprando la deuda y sacando el activo de su balance. Esto permite al cliente liberarse de la carga mensual del dividendo, mientras vendemos la propiedad, protegiendo su patrimonio."}
            />
            <AccordionItem
            keyNumber={"2"}
            header={"#1 ¿Qué es el apartamentaje?"}
            text={"Es un instrumento financiero en el cual LeverProp hace un rescate del patrimonio inmobiliario del cliente, comprando la deuda y sacando el activo de su balance. Esto permite al cliente liberarse de la carga mensual del dividendo, mientras vendemos la propiedad, protegiendo su patrimonio."}
            />
        </Accordion>
        </div>
      </div>
    </>
  );
}

export default FaqsComp;
