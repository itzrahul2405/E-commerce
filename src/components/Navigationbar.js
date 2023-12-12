import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import CartContext from "./cart-context";
import { useContext } from "react";

const Navigationbar = (props) => {

  const cartCtx = useContext(CartContext)

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href='/contact'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Button variant='light' onClick={props.onShow}>Cart</Button>
            <Container className="text-white bg-transparent">{cartCtx.totalQuantity}</Container>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
