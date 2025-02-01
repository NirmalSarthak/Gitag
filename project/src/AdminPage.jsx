import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPage = () => {
  const [getdata, setdata] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    IDs: '',
    Title: '',
    Category: '',
    Price: '',
    Rating: '',
    ImageUrl: '',
  });

  useEffect(() => {
    fetch('http://localhost:8000/getSpicesdata')
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log('Error fetching data:', err));
  }, []);

  // Function to handle Update button click
  const handleUpdateClick = (item) => {
    setSelectedItem(item);
    setFormData({
      IDs: item.IDs,
      Title: item.Title,
      Category: item.Category,
      Price: item.Price,
      Rating: item.Rating,
      ImageUrl: item.ImageUrl,
    });
    setShowModal(true);
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to submit the updated data
  const handleSaveChanges = async () => {
    if (!selectedItem) return;
    
    try {
      const response = await fetch(`http://localhost:8000/updateSpicesdata/${selectedItem._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data updated successfully!');
        setdata((prevData) =>
          prevData.map((item) =>
            item._id === selectedItem._id ? { ...item, ...formData } : item
          )
        );
        setShowModal(false);
      } else {
        alert('Error updating data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Function to delete an item
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/deleteSpicesData/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Data deleted successfully!');
        setdata((prevData) => prevData.filter((item) => item._id !== id));
      } else {
        alert('Error deleting data');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <>
      <h1 className="text-center my-4" style={{ color: 'rgb(99,14,0)', fontSize: '2.5rem', fontWeight: 'bold' }}>
        Spices Collection
      </h1>

      <Container>
        <Row className="g-4 justify-content-center">
          {getdata.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={4}>
              <Card className="card-hover" style={{ width: '100%', borderRadius: '10px' }}>
                <Card.Img
                  variant="top"
                  src={item.ImageUrl || 'https://via.placeholder.com/200'}
                  alt={item.Title}
                  style={{ height: '200px', objectFit: 'contain', backgroundColor: '#f8f8f8' }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{item.Title}</Card.Title>
                  <Card.Text className="text-muted text-center">
                    <p><strong>Category:</strong> {item.Category}</p>
                    <p><strong>Price:</strong> ₹{item.Price} (incl. GST)</p>
                    <p><strong>Rating:</strong> {'⭐'.repeat(item.Rating)}</p>
                  </Card.Text>
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      style={{ backgroundColor: 'rgb(90,14,0)', border: 'none' }}
                      onClick={() => handleUpdateClick(item)}
                    >
                      Update
                    </Button>
                    <Button
                      style={{ backgroundColor: 'rgb(90,14,0)', border: 'none' }}
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Update Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>IDs</Form.Label>
              <Form.Control type="number" name="IDs" value={formData.IDs} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="Title" value={formData.Title} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="Category" value={formData.Category} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" name="Price" value={formData.Price} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control type="number" name="Rating" value={formData.Rating} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" name="ImageUrl" value={formData.ImageUrl} onChange={handleInputChange} />
            </Form.Group>

            <div className="text-center">
              <Button style={{ backgroundColor: 'rgb(90,14,0)', border: 'none' }} onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AdminPage;
