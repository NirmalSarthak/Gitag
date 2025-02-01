import React, { useState } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';

function MyForm() {
  // State variables to store form values
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [ename, setEname] = useState("");

  // Form data to send upon submission
  const data = {
    fname,
    lname,
    ename,
  };

  // Handle form submission
  function formSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Submitted data:", data);
  }

  return (
    <Container>
      <Card className="mt-5">
        <Card.Body>
          <h3>Fill out your details</h3>
          <Form onSubmit={formSubmit}>
            {/* First Name Field */}
            <Form.Group className="mb-3" controlId="formFname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </Form.Group>

            {/* Last Name Field */}
            <Form.Group className="mb-3" controlId="formLname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-3" controlId="formEname">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={ename}
                onChange={(e) => setEname(e.target.value)}
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyForm;
