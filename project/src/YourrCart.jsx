import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

const Yourcart = ({ placement }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} style={{ position: 'fixed', top: '20px', right: '20px' }}>Open Cart</button>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header closeButton className="border-bottom pb-2">
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container">
            <div className="d-flex flex-column gap-3">
              <strong>From the very Land to your Hand®</strong>
            </div>
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
