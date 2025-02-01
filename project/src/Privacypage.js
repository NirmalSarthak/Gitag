import React from 'react';

const Privacypage = () => {
  const styles = {
    container: {
      maxWidth: '1200px',         // Limit the maximum width of the container
      margin: '0 auto',           // Center the content horizontally
      padding: '0 20px',          // Add horizontal padding for space on both ends
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
    },
    heading: {
      fontSize: '3em',            // Increase font size of the Privacy Policy heading
      textAlign: 'center',
      marginBottom: '20px',
      color: 'rgb(99,14,0)'
    },
    subheading: {
      fontSize: '1.5em',
      marginTop: '20px',
      marginBottom: '10px',
      color: 'rgb(99,14,0)'
    },
    paragraph: {
      fontSize: '1em',
      marginBottom: '20px',
    },
    list: {
      paddingLeft: '20px',
    },
    link: {
      display: 'inline-block',
      marginTop: '20px',
      fontSize: '1.1em',
      color: '#007bff',
      textDecoration: 'none',
    },
    '@media (max-width: 768px)': {
      heading: {
        fontSize: '2.5em',        // Reduce font size for smaller screens
      },
      subheading: {
        fontSize: '1.2em',
      },
      paragraph: {
        fontSize: '0.9em',
      },
      link: {
        fontSize: '1em',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy</h1>
      <p style={styles.paragraph}>
        Right to privacy is a Fundamental right implicit in Article 21 (Right to Life and Liberty)
        of the Indian Constitution, and at the same time, Privacy protection in the Digital Age has
        become the most challenging and prime area of concern. Now who doesn’t love their Privacy?
        We at Geographical Indications Tagged World Premium Products (p) Ltd, have made Protection
        of Customer’s Information a top priority of the Organization.
      </p>
      <h2 style={styles.subheading}>Collection Limitation</h2>
      <p style={styles.paragraph}>
        Data or Information that is required for the said purpose shall only be asked by us, and our
        customers shall provide only such Information that they feel is necessary for our long-term
        fruitful endeavor.
      </p>
      <h2 style={styles.subheading}>Purpose Limitation</h2>
      <ul style={styles.list}>
        <li>Shall be relevant to the purpose of Processing and shipping your Orders.</li>
        <li>
          Shall be adequate enough to ease future operations, to share Website-related news, promote
          offers, and perform website usage analytics.
        </li>
        <li>
          In case of any change of purpose, the same shall be notified to the Concerned Customer or
          customers through a general notification on the website.
        </li>
      </ul>
      <h2 style={styles.subheading}>Access Limitation</h2>
      <p style={styles.paragraph}>
        Information access shall be limited to only selected staff of the Organization.
      </p>
      <ul style={styles.list}>
        <li>
          Such staff shall secure information by reasonable security safeguards against loss,
          unauthorized access, unauthorized disclosure, either accidental or incidental, or any
          other reasonably foreseeable risks.
        </li>
        <li>Such staff shall be accountable for complying with measures of this Policy.</li>
      </ul>
      <h2 style={styles.subheading}>Disclosure of Information</h2>
      <ul style={styles.list}>
        <li>Carrier Service Network providers, OTP Provider Software, User Experience enrichment software, Logistics, and Payment gateway for Processing and shipping your Orders.</li>
        <li>State, Central Government, and its Agencies under relevant Acts.</li>
        <li>Court orders or other legal processes.</li>
        <li>Third parties who are relevant and shall be bound to adhere to this policy.</li>
      </ul>
      <p style={styles.paragraph}>
        By using this website, the customer implies agreement to the terms of this privacy policy
        and has permitted the organization to collect, store, and use, Personally Identifiable
        Information (PIF), such as name, address, phone number, email id, bank account number,
        Aadhaar number, and credit card information and system-related data such as Cookies and
        IP address within the preview of this Privacy policy.
      </p>
      <p style={styles.paragraph}>
        If any difficulty arises in giving effect to the provisions of this policy, the Organization
        may make such provisions, as appears to it to be necessary or expedient for removing such
        difficulty by providing a general notification on the website.
      </p>
      <a style={styles.link} href="https://www.gitagged.com/privacy-policy-detailed/" target="_blank" rel="noopener noreferrer">
        To Know Privacy Policy in Detail
      </a>
    </div>
  );
};

export default Privacypage;
