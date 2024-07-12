import { Col, Row } from "react-bootstrap";

const MusicSection = ({ titole }) => {
  return (
    <Row className="row">
      <Col md="10">
        <h2 className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">{titole}</h2>
      </Col>
    </Row>
  );
};

export default MusicSection;
