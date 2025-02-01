import React from 'react';
import { Card, Row, Col } from 'react-bootstrap'; // Importing necessary components
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure bootstrap styles are included

const Aboutus = () => {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    heading: {
      fontSize: '2.8em',
      marginBottom: '20px',
      fontWeight: 'bold',
      textAlign: 'center',
      background: 'linear-gradient(to right, #630E00, #A8322D)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },
    paragraph: {
      fontSize: '1.2em',
      lineHeight: '1.8',
      textAlign: 'justify',
      marginBottom: '20px',
      color: '#444',
    },
    centeredParagraph: {
      fontSize: '1.2em',
      lineHeight: '1.8',
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: '500',
    },
    subHeading: {
      fontSize: '1.8em',
      fontWeight: 'bold',
      marginTop: '20px',
      marginBottom: '10px',
      textAlign: 'center',
      color: '#630E00',
      textTransform: 'uppercase',
    },
    box: {
      border: '2px solid #630E00',
      padding: '20px',
      marginTop: '30px',
      marginBottom: '30px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    cardImage: {
      width: '100%',
      objectFit: 'cover',
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
    cardText: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    cardRow: {
      marginBottom: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    cardCol: {
      marginBottom: '30px',
    },
    card: {
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      borderRadius: '10px',
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
    },
    '@media (max-width: 768px)': {
      heading: {
        fontSize: '2.2em',
      },
      paragraph: {
        fontSize: '1em',
        lineHeight: '1.6',
      },
      subHeading: {
        fontSize: '1.5em',
      },
      box: {
        padding: '15px',
      },
    },
  };
  

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        GI Tagged is a “one-stop store” of celebrated products having geographical origin (GI Tag).
        Our customers need not travel to a place to buy its renowned products. We procure, produce,
        and market GI Tag products and adhere to the requirements as mentioned in the Geographical
        Indications registry. Hence our motto: “From the very land to your hand.” Our categories
        include handicrafts, handlooms, spices, fruits, beverages, and more.
      </p>

      <div style={styles.box}>
        <p style={styles.centeredParagraph}>Know Our Functioning</p>
        <h3 style={styles.subHeading}>GI PANCHAYATH</h3>
        <p style={styles.paragraph}>
          Principles of GI Panchayath:
          <ul>
            <li>Voluntary membership: Voluntary membership signifies “By choice and not by compulsion.” A producer/Artisan shall join the GI Panchayath by his own choice and not by any force.</li>
            <li>Principle of Thrift (Savings): Every GI Panchayath must inculcate the habit of savings among its members.</li>
            <li>Political and Religious Neutrality: The GI Panchayath shall never act as an instrument for political and religious activities. Though a member may belong to a political or religious group, he must maintain the identity of the GI Panchayath.</li>
            <li>Open membership: The membership to GI Panchayath is open to all Producers/Artisans irrespective of Language, Religion, Race, Sex, and Caste.</li>
            <li>Principle of Self-help and Mutual aid: All members of GI Panchayath shall believe in the principle “All for One and One for All”, according to which every member should believe that his/her burden is reduced only by addressing the burden of his fellow members. Self-help and mutual aid is the essence of GI Panchayath.</li>
            <li>Promotion of GI Principles: GI Panchayath shall be a body comprising of Agriculture Producers or Artisans of a particular Geographical Location after having registered themselves as members of GI Panchayath.</li>
          </ul>
        </p>
      </div>

      <h3 style={styles.subHeading}>Get To Know Us</h3>

      {/* Two Cards per Row with Image on Left and Text on Right, Fully Responsive */}
      <Row style={styles.cardRow}>
        <Col xs={12} md={6} style={styles.cardCol}>
          <Card>
            <Row noGutters>
              <Col xs={12} md={6} style={styles.cardImage}>
                <Card.Img variant="top" src="https://via.placeholder.com/500x500" />
              </Col>
              <Col xs={12} md={6} style={styles.cardText}>
                <Card.Body>
                  <Card.Title> Nagare Keshav Mukund</Card.Title>
                  <Card.Text>
                    <p>Mern Stack Developer</p>

                    <p>Email Id: keshavnagare102@gmail.com</p>
                    <p>Mobile No: 7666689474</p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={12} md={6} style={styles.cardCol}>
          <Card>
            <Row noGutters>
              <Col xs={12} md={6} style={styles.cardImage}>
                <Card.Img variant="top" src="https://via.placeholder.com/500x500" />
              </Col>
              <Col xs={12} md={6} style={styles.cardText}>
                <Card.Body>
                  <Card.Title>Nikale Aditya Govind</Card.Title>
                  <Card.Text>
                  <p>Mern Stack Developer</p>
                    <p>Email Id: adityanikale25@gmail.com</p>
                    <p>Mobile No: 7843058214</p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row style={styles.cardRow}>
        <Col xs={12} md={6} style={styles.cardCol}>
          <Card>
            <Row noGutters>
              <Col xs={12} md={6} style={styles.cardImage}>
                <Card.Img variant="top" src="https://via.placeholder.com/500x500" />
              </Col>
              <Col xs={12} md={6} style={styles.cardText}>
                <Card.Body>
                  <Card.Title>Nirmal Sarthak Anil</Card.Title>
                  <Card.Text>
                  <p>Mern Stack Developer</p>
                    <p>Email Id: sarthaknirmal410@gmail.com</p>
                    <p>Mobile No: 9604187674</p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col xs={12} md={6} style={styles.cardCol}>
          <Card>
            <Row noGutters>
              <Col xs={12} md={6} style={styles.cardImage}>
                <Card.Img variant="top" src="https://via.placeholder.com/500x500" />
              </Col>
              <Col xs={12} md={6} style={styles.cardText}>
                <Card.Body>
                  <Card.Title>Pawar Omkar Nandkumar</Card.Title>
                  <Card.Text>
                  <p>Mern Stack Developer</p>
                    <p>Email Id: pawarnandkumaromved@gmail.com</p>
                    <p>Mobile No: 8010405460</p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Aboutus;
