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
            header={"#2 ¿Cuánto demoran en vender mi propiedad?"}
            text={"Hoy en día el promedio de venta de un activo inmobiliario puede variar entre 6 y 12 meses. Bajo las condiciones ofrecidas con el apartamentaje, esperamos lograr la venta el menor tiempo posible, haciéndola más atractiva para el futuro comprador."}
            />
            <AccordionItem
            keyNumber={"2"}
            header={"#3 ¿Cuánto me va a costar el financiamiento?"}
            text={"Las condiciones comerciales están en las bases del contrato."}
            />
             <AccordionItem
            keyNumber={"3"}
            header={"#4 ¿Quién vende mi propiedad?"}
            text={"¡Nosotros! Estamos asociados con una red de corredores que nos prestan servicios para poder vender tu propiedad y lograr así un mayor alcance, reduciendo los tiempos de venta."}
            />
            <AccordionItem
            keyNumber={"4"}
            header={"#5 ¿Por cuántos meses puedo tener el financiamiento?"}
            text={"El contrato es a 12 meses plazo, renovable sólo una vez por 12 meses más. En este plazo proyectamos haber vendido la propiedad."}
            />
            <AccordionItem
            keyNumber={"5"}
            header={"#6 ¿El financiamiento me entrega caja?"}
            text={"Depende del nivel de endeudamiento sobre la propiedad. Si la deuda sobre la tasación actual de la propiedad arroja un número menor al 50%, te entregamos un financiamiento hasta alcanzar el 50% del valor. En caso contrario, no entregamos caja. El objetivo final es liberar al cliente de la carga financiera mensual para tener mayor liquidez, no entregar dinero en efectivo."}
            />
            <AccordionItem
            keyNumber={"6"}
            header={"#7 ¿Puedo acceder al financiamiento si estuve en dicom?"}
            text={"Haber estado en Dicom no es un impedimento para acceder al financiamiento, sin embargo se pondera junto a otras variables financieras para evaluar si el cliente puede acceder al producto."}
            />
            <AccordionItem
            keyNumber={"7"}
            header={"#8 ¿Qué pasa si me arrepiento de vender?"}
            text={"Aunque no es lo que se espera que ocurra, se traspasa la propiedad de vuelta al cliente, bajo las condiciones establecidas en las bases legales del contrato."}
            />
            <AccordionItem
            keyNumber={"8"}
            header={"#9 ¿Qué pasa si renuevo por 12 meses?"}
            text={"Al renovar por 12 meses, se debe incurrir en una planificación escalonada de baja de precio de la propiedad, pues debemos acelerar la venta para este segundo periodo. Con esto buscamos atraer a los potenciales clientes interesados en el primer periodo que no concretaron la compra."}
            />
            <AccordionItem
            keyNumber={"9"}
            header={"#10 ¿Qué pasa si mi propiedad no se vende en 24 meses?"}
            text={"En el caso que la propiedad no se venda en el periodo acordado, hay dos caminos. El primero, que cliente nos recompre la propiedad. De no tener capacidad para hacerlo, venderemos la propiedad al 80% del valor de tasación buscando tener una liquidación rápida."}
            />
        </Accordion>
        </div>
      </div>
    </>
  );
}

export default FaqsComp;
