import "./Product.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../../../cart-context";
import { useContext } from "react";

const Product = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (title) => {
    cartCtx.addToCart(title);
  };

  return (
    <Container>
      <h2 className="text-center mt-5">MUSIC</h2>
      <Row xs={1} md={4} className="d-flex justify-content-between">
        {cartCtx.items.map((product, index) => (
          <Col key={index}>
            <Card style={{ width: "18rem", border: "none" }}>
              <Card.Title className="text-center" >{product.title}</Card.Title>

              <Card.Body className="hover-zoom">
                <img
                  variant="top"
                  src={product.imageUrl}
                  style={{ transition: "transform 0.3s", width: "100%" }}
                  className="img-fluid"
                  alt={product.title}
                />
                <div className="mt-5 d-flex justify-content-between">
                  <Card.Text>${product.price}</Card.Text>
                  <Button
                    variant="warning"
                    onClick={() => addItemToCartHandler(product.title)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="mt -10 d-flex justify-content-center">
        <Button
          variant="secondary"
          style={{ backgroundColor: "gray", color: "skyblue" }}
          onClick={props.onShow}
        >
          See The Cart
        </Button>
      </div>
    </Container>
  );
};

export default Product;
