import { Button, Col, Container, Image, ListGroup, ListGroupItem, Nav, NavbarBrand, Row } from "react-bootstrap";
import { BsHouseDoorFill } from "react-icons/bs";
import { TbBookFilled } from "react-icons/tb";

import { Link } from "react-router-dom";
const NavbarSpotify = () => {
  return (
    <Container>
      <Container className="col-2">
        <Nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <Row className="container flex-column align-items-start">
            <NavbarBrand className="navbar-brand ms-3">
              <Image src="/src/assets/logo.png" alt="Spotify Logo" width="131" height="40" />
            </NavbarBrand>
          </Row>
          <Row>
            <Col md="12" className="ms-4 mb-3 mt-3">
              <Link to={"/"} className="icon link-offset-2 link-underline link-underline-opacity-0">
                <BsHouseDoorFill className="icon" />
                <span className="ms-2">Home</span>
              </Link>
            </Col>
            <Col md="12" className="ms-4 mb-3 ">
              <Link to={"/"} className="icon link-offset-2 link-underline link-underline-opacity-0">
                <TbBookFilled className="icon" />
                <span> Your Library</span>
              </Link>
            </Col>
          </Row>
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
          <Col className="nav-btn">
            <Button className="btn signup-btn" type="button">
              Sign Up
            </Button>
            <Button className="btn login-btn" type="button">
              Login
            </Button>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </Col>
        </Nav>
      </Container>
    </Container>
  );
};

export default NavbarSpotify;
