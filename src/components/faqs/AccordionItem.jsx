import Accordion from "react-bootstrap/Accordion";
function AccordionItem({keyNumber, header,text}){

    return(
        <>
        <Accordion.Item eventKey={keyNumber}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>
              {text}
            </Accordion.Body>
        </Accordion.Item>
        </>
    )
}

export default AccordionItem