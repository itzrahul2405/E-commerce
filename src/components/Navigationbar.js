import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Navigationbar = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
          <Nav>
            <Button variant='light' onClick={props.onShow}>Cart</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
