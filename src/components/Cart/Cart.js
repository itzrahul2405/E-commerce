// import React from "react";
// import {Container, Button, Row, Col } from "react-bootstrap";
// import Modal from "../Modal";

// const Cart = (props) => {
//   const cartItems = [
//     {
//       title: "Colors",
//       price: 100,
//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//       quantity: 2,
//     },
//     {
//       title: "Black and White Colors",
//       price: 50,
//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//       quantity: 3,
//     },
//     {
//       title: "Yellow and Black Colors",
//       price: 70,
//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//       quantity: 1,
//     },
//   ];

//   return (
//     <Modal onClose={props.onClose}>
//         <Container style={{ width: "600px", height: "auto" }} className="float-end border border-2 border-success">
//             <Button className="btn btn-secondary float-end border-3 border-primary mb-2" onClick={props.onClose}>X</Button>
//             <h2 className="cart mt-5 mb-5 d-flex justify-content-center">Cart</h2>

//             <Row>
//             <Col xs={5} className="d-flex justify-content-center">
//                 <h4>Item</h4>
//             </Col>
//             <Col xs={3} className="d-flex justify-content-center">
//                 <h4>Price</h4>
//             </Col>
//             <Col xs={4} className="d-flex justify-content-center">
//                 <h4>Quantity</h4>
//             </Col>
//             </Row>
//             <>
//             {cartItems.map((item, index) => (
//                 <Row key={index} style={{ border: "none" }} className="mb-5">
//                 <Col xs={6} className="d-flex align-items-center">
//                     <img src={item.imageUrl} alt={item.title} style={{ width: "50px", height: "50px", marginRight: "10px" }}/>
//                     <p className="flex-wrap">{item.title}</p>
//                 </Col>
//                 <Col xs={2} className="d-flex justify-content-center">
//                     <p>{item.price}</p>
//                 </Col>
//                 <Col
//                     xs={4}
//                     className="d-flex justify-content-evenly align-items-center"
//                 >
//                     <p>{item.quantity}</p>
//                     <Button className="btn btn-danger">Remove</Button>
//                 </Col>
//                 </Row>
//             ))}
//             </>
//         </Container>
//     </Modal>
//   );
// };

// export default Cart;












import React, { useState } from "react";
import { Container, Button, Row, Col, Modal, Form } from "react-bootstrap";

const Cart = (props) => {
  const cartItems = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and White Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const [items, setItems] = useState(cartItems)
  const [totalPrice, setTotalPrice] = useState(items.reduce((item) => item.price))

  const removeItemHandler = (title) => {
    setItems((prevItems) => prevItems.filter((item) => {
        return item.title !== title
    }))

    // setTotalPrice(totalPrice - )
  }




  return (
    <div className="modal show" style={{ display: "block", position: "initial" }} >
      <Modal show={true} onHide={props.onClose}>
        <Modal.Header className="cart mt-5 mb-5 d-flex justify-content-end align-items-start " >
          <Button className="btn btn-secondary border-3 border-primary mb-2" onClick={props.onClose}>X</Button>
        </Modal.Header>

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
            {items.map((item, index) => (
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
                  <p className="flex-wrap">{item.title}</p>
                </Col>
                <Col xs={2} className="d-flex justify-content-center">
                  <p>{item.price}</p>
                </Col>
                <Col xs={5} className="d-flex justify-content-evenly align-items-center" >
                  <p>{item.quantity}</p>
                  <Button className="btn btn-danger" onClick={() => removeItemHandler(item.title)}>Remove</Button>
                </Col>
              </Row>
            ))}
          </>
          <p>Total Price: </p>
          {/* <h4></h4> */}
        </Modal.Body>

        <Modal.Footer>
            <Button>Purchase</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
