import React, { useContext, useState } from "react";
import { Container, Button, Row, Col, Modal, Form } from "react-bootstrap";
import CartContext from "../cart-context";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const removeItemFromCartHandler = (title) => {
    cartCtx.removeFromCart(title)
  }

  const purchaseHandler = () => {
    if(cartCtx.totalQuantity === 0){
      alert('Please Add Something!')
    }
    else{
      alert('Thank You For Purchasing');
    }
  }



  return (
    <div className="modal show" style={{ display: "block", position: "initial" }} >
      <Modal show={true} onHide={props.onClose}>
        <Modal.Header className="cart mt-5 mb-5 d-flex justify-content-end align-items-start "  closeButton></Modal.Header>

        <Modal.Body>
          <h2 className="text-center mb-5">Cart</h2>

          <Row className="mb-3">
            <Col xs={5} className="d-flex justify-content-center">
              <h4>Item</h4>
            </Col>
            <Col xs={2} className="d-flex justify-content-center">
              <h4>Price</h4>
            </Col>
            <Col xs={5} className="d-flex justify-content-center">
              <h4>Quantity</h4>
            </Col>
          </Row>

          <>
            {cartCtx.cartItems.map((item, index) => (
              <Row key={index} style={{ border: "none" }} className="mb-5">
                <Col xs={5} className="d-flex align-items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                    }}
                  />
                  <p className="flex-wrap" >{item.title}</p>
                </Col>
                <Col xs={2} className="d-flex justify-content-center">
                  <p>{item.price}</p>
                </Col>
                <Col xs={5} className="d-flex justify-content-evenly align-items-center" >
                  <p>{item.quantity}</p>
                  <Button className="btn btn-danger" onClick={() => removeItemFromCartHandler(item.title)}>Remove</Button>
                </Col>
              </Row>
            ))}
          </>

          <p>Total Price: </p>
          <h4>${cartCtx.totalPrice}</h4>
        </Modal.Body>
        
        
        {cartCtx.totalQuantity===0 && <p><strong><i>Cart Is Empty, Please add something!</i></strong></p>}

        <Modal.Footer>
            <Button onClick={purchaseHandler}>Purchase</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
