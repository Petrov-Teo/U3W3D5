import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ElementNotFound = () => {
  return (
    <Container className="text-center text-light mt-5 ">
      <Row>
        <Col className="display-2"> Error 404 Not Found</Col>
      </Row>
      <Link to={"/"} className="mt-4 btn btn-light">
        Go To Home
      </Link>
    </Container>
  );
};

export default ElementNotFound;
