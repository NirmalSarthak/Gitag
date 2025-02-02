import React, { useEffect, useState, useCallback } from 'react'; 
import { Button, Card, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({ IDs: '', Title: '', Category: '', Price: '', Rating: '', ImageUrl: '' });
  const [currentSection, setCurrentSection] = useState('spices');

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:8000/get${currentSection}data`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(`Error fetching ${currentSection} data:`, error);
    }
  }, [currentSection]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleUpdateClick = (item) => {
    setSelectedItem(item);
    setFormData({ ...item });
    setShowModal(true);
  };

  const handleAddNew = () => {
    setSelectedItem(null);
    setFormData({ IDs: '', Title: '', Category: '', Price: '', Rating: '', ImageUrl: '' });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = async () => {
    const url = selectedItem
      ? `http://localhost:8000/update${currentSection}data/${selectedItem._id}`
      : `http://localhost:8000/post${currentSection}data`;
    const method = selectedItem ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(selectedItem ? 'Data updated successfully!' : 'Data added successfully!');
        fetchData();
        setShowModal(false);
      } else {
        alert('Error saving data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/delete${currentSection}Data/${id}`, { method: 'DELETE' });
      if (response.ok) {
        alert('Data deleted successfully!');
        fetchData();
      } else {
        alert('Error deleting data');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleLogout = () => {
    alert('Logging out...');
    // Implement actual logout logic here (clear tokens, redirect, etc.)
  };

  return (
    <>
      <div
        style={{
          backgroundColor: 'rgb(90,14,0)',
          padding: '20px 0',
          textAlign: 'center',
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#fff',
              marginBottom: '0.5rem',
            }}
          >
            Admin Panel
          </h1>
        </div>

        {/* Flexbox container to allow natural flow */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 20px', // Added padding to prevent button from sticking to the edges
          }}
        >
          <div></div> {/* Empty div to take up space and push the button to the right */}
          <Button
            variant="light"
            style={{
              fontWeight: 'bold',
              fontSize: '1rem',
              minWidth: '120px',
              padding: '10px',
              borderRadius: '5px',
            }}
            onClick={handleLogout}
            className="d-flex justify-content-center align-items-center"
          >
            Logout
          </Button>
        </div>

        <div className="btn-group mt-4 flex-wrap justify-content-center">
          {['spices', 'paintings', 'handicrafts', 'textiles'].map((section) => (
            <Button
              key={section}
              variant={currentSection === section ? 'outline-light' : 'outline-warning'}
              onClick={() => setCurrentSection(section)}
              className="btn-lg mx-2 my-1"
              style={{
                borderRadius: '10px',
                color: '#fff',
                backgroundColor: '#000',
                fontSize: '1rem',
                minWidth: '160px',
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)} Collection
            </Button>
          ))}
        </div>
      </div>

      <Container className="my-5">
        <h2
          className="text-center mb-4"
          style={{ fontSize: '2rem', fontWeight: 'bold', color: 'rgb(90,14,0)' }}
        >
          {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)} Collection
        </h2>

        <Row className="g-4 justify-content-center">
          {data.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={item.ImageUrl || 'https://via.placeholder.com/200'}
                  alt={item.Title}
                  style={{
                    height: '200px',
                    objectFit: 'cover',
                    maxWidth: '100%',
                  }}
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

        <div className="text-center my-4">
          <Button
            style={{ backgroundColor: 'rgb(90,14,0)', border: 'none' }}
            className="btn-lg"
            onClick={handleAddNew}
          >
            + Add New {currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}
          </Button>
        </div>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem ? `Update ${currentSection}` : `Add New ${currentSection}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {['IDs', 'Title', 'Category', 'Price', 'Rating', 'ImageUrl'].map((field) => (
              <Form.Group className="mb-3" key={field}>
                <Form.Label>{field}</Form.Label>
                <Form.Control
                  type={field === 'Price' || field === 'Rating' ? 'number' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                />
              </Form.Group>
            ))}
            <div className="text-center">
              <Button
                style={{ backgroundColor: 'rgb(90,14,0)', border: 'none' }}
                onClick={handleSaveChanges}
              >
                {selectedItem ? 'Save Changes' : 'Add New'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AdminPage;
