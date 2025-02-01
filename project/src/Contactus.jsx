import React from 'react';

const Contactus = () => {
  const iframeStyle = {
    border: 0,
    width: '70%',
    height: '450px',
    maxWidth: '100%',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    padding: '0 20px',
    boxSizing: 'border-box',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
    width: '100%',
    maxWidth: '1200px',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    color: 'rgb(99,14,0)',
    border: '2px solid rgb(99,14,0)',
    borderRadius: '8px',
    padding: '10px 20px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
    flex: '1 1 calc(25% - 40px)',
    boxSizing: 'border-box',
    minWidth: '200px',
    maxWidth: 'calc(25% - 40px)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', color: 'rgb(99,14,0)', marginBottom: '10px' }}>
        HEAD QUARTERS
      </h1>
      <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>
        GiTAGGED | Geographical Indications Tagged World Premium Products (P) Ltd
      </h3>
      <p style={{ textAlign: 'center', marginBottom: '10px' }}>
        #12, 13th Cross, Sector 6, HSR Layout Bangalore 560102
      </p>

      {/* Map Container 1 */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <iframe
          title="GiTAGGED Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.874491306626!2d77.63215457356699!3d12.915787316102515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae148c493845eb%3A0x9e68143c47ce38f3!2sGiTAGGED%C2%AE%20%7C%20Geographical%20Indications%2C%20India!5e0!3m2!1sen!2sin!4v1736739520303!5m2!1sen!2sin"
          style={iframeStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Headings Row */}
      <div style={rowStyle}>
        <div style={headingStyle}>Customization</div>
        <div style={headingStyle}>Exclusive Store only items</div>
        <div style={headingStyle}>Product Consultation</div>
        <div style={headingStyle}>Experience the Heritage</div>
      </div>

      <h3 style={{ textAlign: 'center', marginTop: '30px' }}>
        GiTAGGED Estate & Agro Processing Plant
      </h3>
      <p style={{ textAlign: 'center', marginBottom: '10px' }}>
        Bommenahalli, Belur Taluk, Hassan District, Karnataka 573101
      </p>

      {/* Map Container 2 */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <iframe
          title="GiTAGGED Estate Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.605179386303!2d75.77733321207249!3d13.089596312282271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba52b99bb4abb85%3A0xe276126350e02f80!2sGiTAGGED%20Agro%20Food%20Processing%20Plant!5e0!3m2!1sen!2sin!4v1736742461915!5m2!1sen!2sin"
          style={iframeStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <h3 style={{ textAlign: 'center', marginTop: '30px' }}>
        GI Panchayath – Bastar
      </h3>
      <p style={{ textAlign: 'center', marginBottom: '5px' }}>
        Office of Extension Officer
      </p>
      <p style={{ textAlign: 'center', marginBottom: '5px' }}>
        Bhond Village, Lamker Post, Bhond, Bastar, Chhattisgarh – 494223
      </p>
    </div>
  );
};

export default Contactus;
