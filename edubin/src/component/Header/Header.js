import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import edubinlogo from "../Assets/Images/logo.jpg";
import { FaUserAlt } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex  align-items-center ">
              <img
                alt=""
                src={edubinlogo}
                width="60"
                height="50"
                className="d-inline-block me-4 align-top rounded-circle "
              />
              <h2 className="pt-2 text-white fw-bold  ">Edubin</h2>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fs-5">
              <Nav.Link href="">Courses</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">Faq</Nav.Link>
              {/* <Nav.Link href="#memes">Toggle Theme</Nav.Link> */}
              <NavDropdown title="Theme" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Light</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Dark</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="fs-5">
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link className="me-5" href="#memes">
                Logout
              </Nav.Link>
              <Nav.Link
                href="#memes"
                className="p-2  rounded-circle bg-danger "
                style={{ width: "50px" }}
              >
                <FaUserAlt className="text-warning   fs-3    ms-sm-1 ms-1"></FaUserAlt>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
