import React, { useState, useEffect } from 'react'; 
import './App.css'; 
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'; 
import Breadcrumb from 'react-bootstrap/Breadcrumb'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Box from '@mui/material/Box'; 
import Rating from '@mui/material/Rating'; 
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'; 
import Hing from './Hing'; // Optional link to another component

const API_URL = 'http://localhost:8000'; // Backend API

// Categories for Handicrafts
const categoriesHandicrafts = [
  'Stone Craft', 
  'Natural Craft', 
  'Metal Craft', 
  'Wooden Craft', 
  'Natural Fibre'
];

const router = createBrowserRouter([ 
  { path: "/hing", element: <Hing /> } 
]);

function HandicraftsPage() { 
  const [allProducts, setAllProducts] = useState([]); // Store all fetched products
  const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products

  // Filters
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedSortOption, setSelectedSortOption] = useState('price-asc');
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Fetch Handicraft data from the API
  useEffect(() => {
    const fetchHandicrafts = async () => {
      try {
        const response = await fetch(`${API_URL}/getHandicraftdata`);
        const data = await response.json();
        setAllProducts(data); // Store all products
        setFilteredProducts(data); // Initially show all products
      } catch (error) {
        console.error('Error fetching handicrafts data:', error);
      }
    };
    fetchHandicrafts();
  }, []);

  // Apply filters when state changes
  useEffect(() => {
    let filtered = allProducts.filter((product) => {
      const inPriceRange = product.Price >= minPrice && product.Price <= maxPrice;
      const inCategory = selectedCategory ? product.Category === selectedCategory : true;
      const inRating = selectedRating !== null ? product.Rating >= selectedRating : true;

      return inPriceRange && inCategory && inRating;
    });

    // Sorting
    if (selectedSortOption === 'price-asc') {
      filtered.sort((a, b) => a.Price - b.Price);
    } else if (selectedSortOption === 'price-desc') {
      filtered.sort((a, b) => b.Price - a.Price);
    } else if (selectedSortOption === 'rating-asc') {
      filtered.sort((a, b) => a.Rating - b.Rating);
    } else if (selectedSortOption === 'rating-desc') {
      filtered.sort((a, b) => b.Rating - a.Rating);
    }

    setFilteredProducts(filtered); // Update filtered products only if necessary
  }, [selectedCategory, minPrice, maxPrice, selectedRating, selectedSortOption, allProducts]);

  // Reset Filters
  const handleReset = () => {
    setSelectedCategory('');
    setMinPrice(0);
    setMaxPrice(1000);
    setSelectedRating(null);
    setSelectedSortOption('price-asc');
  };

  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Handicrafts</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        {/* Sidebar (Filters) */}
        <Col xs={12} md={3} className={`sidebar ${isFilterVisible ? 'show' : 'hide'} d-md-block`}>
          <h3>Filters</h3>
          <Form>
            {/* Sorting */}
            <Form.Group className="mt-3">
              <Form.Label>Sort by</Form.Label>
              <Form.Control as="select" value={selectedSortOption} onChange={(e) => setSelectedSortOption(e.target.value)}>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-asc">Rating: Low to High</option>
                <option value="rating-desc">Rating: High to Low</option>
              </Form.Control>
            </Form.Group>

            {/* Category Filters */}
            <Form.Group controlId="categoryFilter">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">All</option>
                {categoriesHandicrafts.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Price Filter */}
            <Form.Group className="mt-3">
              <Form.Label>Price Range</Form.Label>
              <Row>
                <Col>
                  <Form.Label>₹ {minPrice} - ₹ {maxPrice}</Form.Label>
                  <Form.Range
                    min={0}
                    max={1000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    style={{ marginBottom: '10px' }}
                  />
                </Col>
              </Row>
            </Form.Group>

            {/* Rating Filter */}
            <Form.Group className="mt-3">
              <Form.Label>Filter by Rating</Form.Label>
              <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating name="rating" value={selectedRating} onChange={(e, newRating) => setSelectedRating(newRating)} precision={0.5} />
              </Box>
            </Form.Group>

            <Button variant="secondary" className="mt-3" onClick={handleReset}>Reset Filters</Button>
          </Form>
        </Col>

        {/* Toggle Filter Button (Mobile) */}
        <Col xs={12} className="d-md-none text-center mt-3">
          <Button variant="primary" onClick={() => setIsFilterVisible(!isFilterVisible)}>
            {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </Col>

        {/* Product List */}
        <Col xs={12} md={9}>
          <h1 style={{ color: 'rgb(90, 14, 0)' }}>Handicrafts</h1>
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product._id} xs={12} sm={6} md={4} lg={4}>
                <Link to="/hing" style={{ textDecoration: 'none' }}>
                  <Card className="mb-3">
                    <Card.Img variant="top" src={product.ImageUrl} className="product-image-w" />
                    <Card.Title>{product.Title}</Card.Title>
                    <Card.Subtitle className="text-center sub">₹ {product.Price} incl. GST</Card.Subtitle>
                    <Card.Body className="text-center">
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Rating name="read-only" value={product.Rating} readOnly precision={0.5} />
                      </Box>
                      <Button variant="primary" style={{ backgroundColor: 'rgb(90, 14, 0)', borderColor: 'rgb(90, 14, 0)' }} className="btn-lg mx-3">
                        Add to Cart
                      </Button>
                      <Button variant="primary" style={{ backgroundColor: 'rgb(90, 14, 0)', borderColor: 'rgb(90, 14, 0)' }} className="btn-lg mx-3">
                        Buy Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HandicraftsPage;
