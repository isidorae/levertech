import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

function NewsCard({path, img, date, category, title, text}) {
  return (
    <>
    <Col className="my-3 d-flex align-items-center justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Link to={path}>
          <Card.Img variant="top" src={img} />
        </Link>
        <Card.Body>
          <Card.Text className="mb-3">
            <section className="d-flex justify-content-between">
              <p>{date}</p>
              <p>{category}</p>
            </section>
          </Card.Text>
          <Link to="/">
            <Card.Title>{title}</Card.Title>
          </Link>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </>
  );
}

export default NewsCard;
