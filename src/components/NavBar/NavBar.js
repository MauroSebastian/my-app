import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
    return (
<Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Libroteca</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Estrenos</Nav.Link>
      <Nav.Link href="#features">Clásicos</Nav.Link>
      <Nav.Link href="#pricing">Argentinos</Nav.Link>
      <Nav.Link href="#tematicos">Temáticos</Nav.Link>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>

    )
  }
  
  export default NavBar;