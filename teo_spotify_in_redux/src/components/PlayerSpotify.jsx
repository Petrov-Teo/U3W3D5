import { Col, Container, Row } from "react-bootstrap";

const PlayerSpotify = () => {
  return (
    <Container class="container-fluid fixed-bottom bg-container pt-1 flex-column justify-content-center align-items-center">
      <Row className="h-100 ">
        <Col lg="10" className="offset-lg-2 col-6 col-md-4 playerControls">
          <a href="#">
            <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
          </a>
          <a href="#">
            <img src="assets/playerbuttons/prev.png" alt="prev" />
          </a>
          <a href="#">
            <img src="assets/playerbuttons/play.png" alt="play" />
          </a>
          <a href="#">
            <img src="assets/playerbuttons/next.png" alt="next" />
          </a>
          <a href="#">
            <img src="assets/playerbuttons/repeat.png" alt="repeat" />
          </a>
        </Col>
      </Row>
      <div class="d-flex"> </div>
      <div class="progress mt-3">
        <div role="progressbar"></div>
      </div>
    </Container>
  );
};

export default PlayerSpotify;
