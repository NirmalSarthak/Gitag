import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

const Yourcart = ({ placement }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const buttonStyle = { 
    backgroundColor: 'rgb(99,14,0)', 
    borderColor: 'rgb(99,14,0)', 
    fontSize: '1.5rem', // Increase font size
    padding: '15px 30px', // Increase padding
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="position-fixed top-0 end-0 m-3"
        style={buttonStyle}
      >
        Open Cart
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header closeButton className="border-bottom pb-2">
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between" style={{height: '100%'}}>
          <div></div> {/* Empty space to push buttons to the bottom */}
          <div className="d-flex flex-column gap-3 mt-auto">
            <div className="d-flex justify-content-between gap-0">
              <Button variant="primary" className="btn-lg" style={buttonStyle}>View Cart</Button>
              <Button variant="secondary" className="btn-lg" style={buttonStyle}>Checkout</Button>
            </div>
            <strong><h5>From the very Land to your Hand®</h5></strong>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const Cart = () => {
  return (
    <div>
      <Yourcart placement="end" />
    </div>
  );
};

export default Cart;
