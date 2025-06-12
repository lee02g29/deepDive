import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/Navbars.css"

export default function Navbars() {


  
  return (
    <Navbar>
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Nav className="justify-content-end nav-bars">
          <Nav.Link href="#All">All</Nav.Link>
          <Nav.Link href="#Active">Active</Nav.Link>
          <Nav.Link href="#Completed">Completed</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
