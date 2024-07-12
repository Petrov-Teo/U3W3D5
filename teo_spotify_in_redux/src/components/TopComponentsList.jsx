import { Col, Row } from "react-bootstrap";

const TopComponentsList = () => {
  return (
    <Row className="ms-5 ps-5">
      <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </Col>
    </Row>
  );
};

export default TopComponentsList;
