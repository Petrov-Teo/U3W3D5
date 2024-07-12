import { Button, Col, Container, Image, ListGroup, ListGroupItem, Nav, NavbarBrand, Row } from "react-bootstrap";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";
const NavbarSpotify = () => {
  return (
    <Container>
      <aside className="col col-2">
        <Nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <Row className="container flex-column align-items-start">
            <NavbarBrand className="navbar-brand">
              <Image src="/src/assets/logo.png" alt="Spotify Logo" width="131" height="40" />
            </NavbarBrand>
            <Link to={"/"} className="text-center">
              <BsHouseDoorFill className="icon" />
              <span className="icon ">Home</span>
            </Link>
            <BsBook />

            <Button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <Col className="collapse navbar-collapse" id="navbarNavAltMarkup"></Col>
          </Row>
          <div className="nav-btn">
            <button className="btn signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn login-btn" type="button">
              Login
            </button>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </Nav>
      </aside>
    </Container>
  );
};

export default NavbarSpotify;
