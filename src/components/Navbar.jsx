import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.svg";
import logo1 from "../assets/images/nav-icon1.svg";
import logo2 from "../assets/images/nav-icon2.svg";
import logo3 from "../assets/images/nav-icon3.svg";
import "./Navbar.css";

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container className="main">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo"></img>
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#project">Project</Nav.Link>
        </Nav>
        <div className="icons">
          <div className="logof"><img src={logo1}></img></div>
          <div className="logos"><img src={logo2}></img></div>
          <div className="logot"><img src={logo3}></img></div>   
        </div>
        <button type="button" class="btn btn-secondary" className="connectbutton">Let's Connect</button>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
