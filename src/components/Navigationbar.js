import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CartContext from "./cart-context";
import { useContext } from "react";
import AuthContext from "./auth- context";

const Navigationbar = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            {authCtx.isLoggedIn && <Button variant="light" onClick={props.onShow}>
              Cart
            </Button>}
            {authCtx.isLoggedIn && <Container className="text-white bg-transparent">
              {cartCtx.totalQuantity}
            </Container>}
          </Nav>
          <Nav>
            {!authCtx.isLoggedIn && <Nav.Link href="/auth">Login</Nav.Link>}
            {authCtx.isLoggedIn && (
              <button style={{color: 'white', background: 'black'}}
                onClick={() => { authCtx.logout() }}>Logout</button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
