import { Button, Col, Container, Image, Nav, NavbarBrand, Row } from "react-bootstrap";

const NavbarSpotify = () => {
  return (
    <Container>
      <aside className="col col-2">
        <Nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <Row className="container flex-column align-items-start">
            <NavbarBrand className="navbar-brand">
              <Image src="/src/assets/logo.png" alt="Spotify Logo" width="131" height="40" />
            </NavbarBrand>
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
            <Col className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* <ul>
                  <li>
                    <NavLink to={"/"} className="nav-item nav-link d-flex align-items-center" href="#">
                      <i className="bi bi-house-door-fill"></i>&nbsp; Home
                    </a>
                  </NavLink>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                      <i className="bi bi-book-fill"></i>&nbsp; Your Library
                    </a>
                  </li>
                  <li>
                    <div className="input-group mt-3">
                      <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                      <div className="input-group-append">
                        <button className="btn btn-outline-secondary btn-sm h-100">GO</button>
                      </div>
                    </div>
                  </li>
                </ul> */}
              </div>
            </Col>
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
