import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/leverwhite.png";
import { useState } from "react";

function NavBar() {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar navbar-shadow main-green-bg">
        <Container className="navbar-container">
          <Navbar.Brand as={Link} to="/" className="light-ft-color">
            <img className="logo" src={logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="light-ft-color nav-item">
                Inicio
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/como-funciona"
                className="light-ft-color nav-item"
              >
                ¿Cómo Funciona?
              </Nav.Link>
              <Nav.Link as={Link} to="/nosotros" className="light-ft-color nav-item">
                Conócenos
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto" className="light-ft-color nav-item">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/noticias" className="light-ft-color nav-item">
                Noticias
              </Nav.Link>
            </Nav>
            <Nav>
              {isAuth ? (
                <>
                <NavDropdown title="@Usuario" id="collapsible-nav-dropdown" className="mt-1 light-ft-color">
                <NavDropdown.Item href="#action/3.1">
                    Mi Perfil
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Contratar
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Simular
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Agendar
                  </NavDropdown.Item>
              </NavDropdown>
                <Nav.Link as={Link} to="/logout">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-box-arrow-right light-ft-color nav-item"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                    />
                  </svg>
                </Nav.Link>
                </>

              ) : (
                <Nav.Link as={Link} to="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-person-square light-ft-color nav-item"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                  </svg>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
