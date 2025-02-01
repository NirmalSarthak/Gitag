import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Customer = () => {
  const styles = {
    container: {
      maxWidth: '1200px',  
      margin: '0 auto',    
      padding: '20px',     
      textAlign: 'center',
    },
    heading: {
      fontSize: '3em',
      textDecoration: 'underline',
      marginBottom: '20px',
      color: '#cf2e2e',
    },
    subHeading: {
      fontSize: '2em',
      marginBottom: '20px',
      color: '#000',
    },
    accordionBody: {
      textAlign: 'justify',
      fontSize: '1.1em',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>WELCOME TO GiTAGGED SUPPORT PORTAL</h1>
      <h2 style={styles.subHeading}>&#128214; Orders & Shipping Policy</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is the shipping policy?</Accordion.Header>
          <Accordion.Body style={styles.accordionBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What are the delivery timelines?</Accordion.Header>
          <Accordion.Body style={styles.accordionBody}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Customer;
