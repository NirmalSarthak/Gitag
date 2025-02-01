import React from 'react';  
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cussuport = () => {
  const styles = {
    container: {
      padding: 'clamp(10px, 3%, 20px)', // Keeps the original padding
      textAlign: 'center',
      marginLeft: 'auto', // Add space on the left
      marginRight: 'auto', // Add space on the right
    },
    headingContainer: {
      maxWidth: 'clamp(150px, 95%, 1200px)',
      margin: '0 auto 20px auto',
      background: 'white',
      padding: 'clamp(12px, 5vw, 30px)',
      borderRadius: '12px',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
      border: '2px solid rgb(99,14,0)',
    },
    heading: {
      fontSize: 'clamp(0.5rem, 4vw, 1.5em)',
      margin: '0',
      color: 'rgb(99,14,0)',
      lineHeight: '1.2',
    },
    subHeading: {
      fontSize: 'clamp(0.5rem, 4vw, 1.5em)',
      marginBottom: '10px',
      color: 'rgb(99,14,0)',
    },
    accordionBody: {
      textAlign: 'justify',
      fontSize: 'clamp(1rem, 3vw, 1.1em)',
    },
    accordionContainer: {
      backgroundColor: '#f9f9f9',
      padding: '0px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginTop: '15px',
      marginRight: '10px'
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: '20px',
      paddingLeft: '15%', // Increased padding on the left side
      paddingRight: '15%', // Increased padding on the right side
    },
    col: {
      flex: '1 1 calc(50% - 1rem)', // Default for medium screens
      marginBottom: '1rem',
      '@media (max-width: 768px)': {
        flex: '1 1 100%', // Full width for small devices
      },
      '@media (max-width: 576px)': {
        padding: '0.5rem', // Reduce padding for very small screens
      },
    },
    accordionHeader: {
      fontSize: 'clamp(1rem, 2.5vw, 1.5em)', // Adjust the font size of accordion headers
      color: '#000'}

  };

  return (
    <div className="container-fluid px-3 px-md-5" style={styles.container}>
      <div style={styles.headingContainer}>
        <h1 style={styles.heading}>WELCOME TO GiTAGGED SUPPORT PORTAL</h1>
      </div>

      <div style={styles.row}>
        {/* Orders & Shipping Policy Accordion */}
        <div style={styles.col}>
          <h2 style={styles.subHeading}>&#128214; Orders & Shipping Policy</h2>
          <div style={styles.accordionContainer}>
            <Accordion defaultActiveKey={null}>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={styles.accordionHeader}>Domestic Shipping</Accordion.Header>
                <Accordion.Body style={styles.accordionBody}>
                <p><strong>How long does it take for me to receive my order?</strong></p>
                  <p>Normally Delivered within 7 working days from the date of placing the Order. We ship all the orders through Express delivery methods.</p>
                  <p><strong>Order Processing and Confirmation:</strong></p>
                  <ul>
                    <li>Normally all Domestic Orders will be processed and shipped within 48 hours.</li>
                    <li>Confirmation will be solely done via Email.</li>
                    <li>Shipment Tracking Number will be sent to your email once the product is shipped.</li>
                  </ul>
                  <p><strong>How do I track the status of my order?</strong></p>
                  <p>Once the order is shipped, you’ll receive an email regarding the same with the Delivery Partner's name and the Tracking number.</p>
                  <p>Alternatively, you can track your order from <strong>My Account → Orders → View → Track</strong>.</p>
                  <p><strong>Will you keep my Credit/Debit card information on file?</strong></p>
                  <p>No, We do not store any of your card details. All the payments are secured by our Trusted partners for a hassle-free transaction.</p>
                  <p><strong>Will my items come in one package?</strong></p>
                  <p>Yes, all your ordered items will come in one single package.</p>
                  <p><strong>Delay in Delivery:</strong></p>
                  <ul>
                    <li>Act of God.</li>
                    <li>Customer unavailable even after multiple attempts.</li>
                    <li>Remote Destinations.</li>
                    <li>Unforeseen time lags by the Courier Partner.</li>
                  </ul>
                  <p><strong>Shipping Privacy:</strong></p>
                  <p>The organization ensures that the data provided during the order placement shall be our top concern for security and privacy. However, the organization is bound to release information to local, state, central, or international law enforcement officials when the law calls for the same.</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header style={styles.accordionHeader}>International Shipping</Accordion.Header>
                <Accordion.Body style={styles.accordionBody}>
                <p className="sectionHeading"><strong>Customs Clearance and Remote Area Surcharge for International Orders</strong></p>
                  <p><strong>Customs Duties and Taxes:</strong> All orders shipping to a destination outside of India are subjected to import duties and taxes, as applicable in the respective destination and the Customers are liable to pay such duties.</p>
                  <p><strong>Delay in Delivery:</strong> The customer’s package may be randomly selected by the Customs Department for inspection.</p>
                  <p><strong>Customs Clearance:</strong> The customer will be responsible to upload/Provide KYC Documents (ID Proof) for the Product to clear customs within the stipulated time frame. Failing to do so shall lead to the destruction of the shipment by the customs department, and no refund would be made in such cases.</p>
                  <p><strong>Surcharge:</strong> For certain International Orders, if the logistics professionals specify the address as a Remote location, an additional surcharge may be levied as per the international carrier policy. This Remote Area Surcharge will not be charged at the time of placing the order. Instead, it would be informed to the customer before shipping the goods. In such a case, the customer has to pay the surcharge through our website. If the surcharge is not paid within 3 working days after receiving the notification, the Organization will cancel the order and refund the entire product amount to the customer’s bank account.</p>
                  <p className="sectionHeading"><strong>International Returns</strong></p>
                  <ul>
                    <li>If the package is detained or refused at the time of import by the country’s Customs Agency for any reason, the Organization will credit a full refund of the order, deducting the total shipping charges, including any return charges. This refund is processed when the order is returned to the Organization.</li>
                    <li>If the package is returned by the customer, upon the receipt of the product, the Organization will refund the entire product amount after deducting all the incurred logistics & statutory charges incurred for Order processing.</li>
                  </ul>
                  <p><strong>Shipping Privacy:</strong> The organization ensures that the data provided during the Order placement shall be our top concern for security and privacy. However, the Organization is bound to release information to local, state, central, or international law enforcement officials when the law calls for the same.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        {/* Cancellation Policy Accordion */}
        <div style={styles.col}>
          <h2 style={styles.subHeading}>&#128214; Cancellation Policy</h2>
          <div style={styles.accordionContainer}>
            <Accordion defaultActiveKey={null}>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={styles.accordionHeader}>Cancellation initiated by the Customer</Accordion.Header>
                <Accordion.Body style={styles.accordionBody}>
                  <ul>
                    <li>Customers must raise the Cancellation request before we ship your product. Via My Account, The Confirmation email shall be sent within 2 working days and the purchase Total amount will be refunded within 7 working days to the Customer’s bank account.</li>
                    <li>Once the Order is Shipped, Cancellation request tab in your Dashboard will be disabled automatically and in such cases, customers will have to receive the product and request for Return.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header style={styles.accordionHeader}>Cancellation initiated by the Organization</Accordion.Header>
                <Accordion.Body style={styles.accordionBody}>
                  <ul>
                    <li>The Organization reserves the right, at its sole discretion, to cancel any order.</li>
                    <li> If your order is canceled after the amount deduction from your bank account through internet banking/credit card, the said amount will be reversed back to your bank account/ credit card within 7 working days.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      
      <div style={styles.row}>
        {/*Return & Refund Policy Accordion */}
        <div style={styles.col}>
          <h2 style={styles.subHeading}>&#128214; Return & Refund Policy</h2>
          <div style={styles.accordionContainer}>
            <Accordion defaultActiveKey={null}>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={styles.accordionHeader}>Handicrafts & Handlooms</Accordion.Header>
                <Accordion.Body style={styles.accordionBody}>
                <p><strong>Easy & Free 7 Day Returns</strong></p>
                  <ul>
                    <li>We’ve got you covered with an Easy, Free 7 Day Return Policy for most of the HandiCraft and Handloom Category, Please do check for “Easy Returns Tag” while placing the order</li>
                    <li>You can request the return from your My account - Orders - Request return.</li>
                    <li>Once the request is Placed We will initiate the return pickup request with our delivery partner</li>
                    <li>Upon successful return and verification of the product in original condition, the Amount shall be credited to the Original Payment mode within 7 Working Days from the date of receipt of Products to the below address:</li>
                    
                  </ul>
                  <p>Geographical Indications Tagged World Premium Products (P) Ltd</p>
                  <p>#12, 13th Cross, 6th Sector, Service road, HSR Layout Bangalore – 560102</p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header style={styles.accordionHeader}>Non Returnable</Accordion.Header>
                <Accordion.Body style={styles.accordionBody}>
                <p className="sectionHeading"><strong>Not Eligible for Returns</strong></p>
                  <p>Groceries, Food Items, Paintings, Gold Jewelry  at GI Tagged are Not Covered under Returns policies.</p>
                  <p> Check Non-returnable Tag in individual Product Page to know if a particular product is Eligible for Returns.  In case the product received is damaged, Please report it immediately via +91-7353011116 or mail us your concern at care@gitagged.com</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        {/* Download Policies */}
        <div style={styles.col}>
          <h2 style={styles.subHeading}>&#128214; Download Policies</h2>
          <div style={styles.accordionContainer}>
            <Accordion defaultActiveKey={null}>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={styles.accordionHeader}>Shipping Policy Download</Accordion.Header>
                <Accordion.Body style={styles.accordionBody}>
                  <a class="newcancelpdf" href="https://www.gitagged.com/wp-content/uploads/GI-Policies/SHIPPING%20POLICY.pdf" targrt="_blank"> <i class="fa fa-file-pdf-o" aria-hidden="true"></i> Download PDF</a>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header style={styles.accordionHeader}>Returns and Refund Policy Download</Accordion.Header>
                <Accordion.Body style={styles.accordionBody}>
                <a class="newcancelpdf" href="https://www.gitagged.com/wp-content/uploads/2023/12/RETURN-REFUND-POLICY.pdf">Download PDF</a>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
      <div style={styles.row}>
        {/*Policies & Addressal Accordion */}
        <div style={styles.col}>
  <h2 style={styles.subHeading}>&#128214; Policies & Addressal</h2>
  <div style={styles.accordionContainer}>
    <Accordion defaultActiveKey={null}>
      {/* First Header */}
      <Accordion.Item eventKey="0">
        <Accordion.Header style={styles.accordionHeader}>Privacy Policies</Accordion.Header>
        <Accordion.Body style={styles.accordionBody}>
        <p>
      <strong>Right to Privacy:</strong> Privacy is a fundamental right implicit in Article 21 (Right to Life and Liberty) 
      of the Indian Constitution. At the same time, privacy protection in the digital age has become a challenging and 
      prime area of concern. Now, who doesn’t love their privacy? At Geographical Indications Tagged World Premium 
      Products (P) Ltd, protecting our customers’ information is a top priority.
    </p>
    
    <h5><strong>Collection Limitation:</strong></h5>
    <p>
      Data or information required for the said purpose shall only be collected, and customers shall provide only such 
      information they feel necessary for our long-term, fruitful endeavors.
    </p>

    <h5><strong>Purpose Limitation:</strong></h5>
    <ul>
      <li>Shall be relevant to the purpose of processing and shipping your orders.</li>
      <li>Shall be adequate enough to ease future operations, share website-related news, promote offers, and perform website usage analytics.</li>
      <li>In case of any change of purpose, the same shall be notified to the concerned customer(s) through a general notification on the website.</li>
    </ul>

    <h5><strong>Access Limitation:</strong></h5>
    <ul>
      <li>Information access shall be limited to selected staff of the organization.</li>
      <li>Such staff shall secure information by reasonable safeguards against loss, unauthorized access, or disclosure, either accidental or incidental.</li>
      <li>Such staff shall be accountable for complying with measures of this policy.</li>
    </ul>

    <h5><strong>Disclosure of Information:</strong></h5>
    <ul>
      <li>To logistics and payment gateways for processing and shipping your orders.</li>
      <li>To state and central government agencies under relevant acts.</li>
      <li>To court orders or other legal processes.</li>
      <li>To third parties relevant to this policy and bound to adhere to its provisions.</li>
    </ul>

    <h5><strong>Choice and Consent:</strong></h5>
    <p>
      By using this website, the customer agrees to the terms of this privacy policy and permits the organization to 
      collect, store, and use Personally Identifiable Information (PIF), such as name, address, phone number, email ID, 
      bank account details, Aadhaar number, and credit card information. This includes system-related data, such as 
      cookies and IP address, as per this privacy policy.
    </p>
    <p>
      If any difficulty arises in giving effect to the provisions of this policy, the organization may make such 
      provisions as necessary or expedient for removing such difficulty by providing a general notification on the 
      website.
    </p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Second Header */}
      <Accordion.Item eventKey="1">
        <Accordion.Header style={styles.accordionHeader}>Claimer & Disclaimer</Accordion.Header>
        <Accordion.Body style={styles.accordionBody}>
        <p>
      <strong>Product Information:</strong> Product information displayed on our website may be incorrect due to 
      technical issues or typographical errors. In such cases, the organization reserves the right to cancel the order(s).
    </p>

    <h5><strong>The Organization Does Not Warrant:</strong></h5>
    <ul>
      <li>That this website will be constantly available at all times.</li>
      <li>That the information on this website is complete in all ways or non-misleading.</li>
      <li>
        That information, content, materials, products, or services provided to the customer through the website, 
        their servers, or electronic communications sent from the organization are free of viruses or other harmful components.
      </li>
    </ul>

    <h5><strong>Product Delivery:</strong></h5>
    <p>
      All products sold on the website are governed by different state laws. If the organization is unable to deliver 
      such products due to implications of state laws, it shall return or provide credit for the amount received in advance 
      for the sale of such products that could not be delivered to the customer.
    </p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Third Header */}
      <Accordion.Item eventKey="2">
        <Accordion.Header style={styles.accordionHeader}>Terms & Condition Policy</Accordion.Header>
        <Accordion.Body style={styles.accordionBody}>
        <p><strong>Welcome to World’s First Exclusive Online Store of Geographical Indications Tagged Products</strong></p>
    <p>
      If you continue to browse and use this website, you are agreeing to comply with and be bound by the following 
      terms and conditions of use and all the applicable laws. Our website is fully compliant in terms of the 
      Information Technology Act, 2000 and all its amendments, in accordance with the provisions of Rule 3 (1) of 
      the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and 
      regulations, privacy policy, and user agreement for access or usage of www.gitagged.com website.
    </p>
    <p>
      This User Agreement contains rules and regulations, policies, terms & conditions, and agreements applicable 
      to any person who may access or use our website, including any sub-domains, web pages, or extensions of 
      gitagged.com. By accessing or using our website, you hereby agree and acknowledge to be bound by the terms of 
      this User Agreement.
    </p>
    <p>
      For the purposes of this User Agreement, the terms ‘Geographical Indications Tagged World Premium Products 
      Private Limited’, ‘GI TAGGED’, ‘Organization’, ‘us’, ‘we’, or ‘The Company’ refer to the owner of the website 
      whose registered office is No.12, 13th Cross, 6th Sector, Service Road, HSR Layout, Bangalore-560102. The term 
      ‘you’ refers to the user or viewer of our website.
    </p>
    <p>
      Our Organization views the protection of customers' privacy as a very important principle. The Organization 
      understands clearly that customers' Personal Information is one of the most important assets.
    </p>
    <p>
      The Organization strives to ensure the accuracy of the product’s quality. However, as all products are 
      handmade, there may be slight variations in size, color, or shape compared to the displayed image. The 
      Organization will make every effort to deliver the same product, but if it is unavailable, the customer will 
      be given similar options. If a customer finds any damage or defect in the product at the time of delivery, 
      they are requested to refer to the Return and Refund Policy for further action. The Organization shall not be 
      liable for any loss or damage arising directly or indirectly out of the decline of authorization for any 
      transaction.
    </p>
    <p>
      Use of www.gitagged.com and its services is subject to the rules, regulations, policies, laws, and other 
      regulatory policies that may be established from time to time. Unauthorized use of this website shall give 
      rise to a claim for damages and will constitute a criminal offense. Creation of a link to our website from 
      another website or document is not allowed without the Organization’s prior written consent.
    </p>
    <p>
      The terms & conditions are applicable to the customer upon their registration or shopping process. The 
      Organization reserves the right to terminate any part of these terms & conditions at any time and for any 
      reason without prior notice.
    </p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Fourth Header */}
      <Accordion.Item eventKey="3">
        <Accordion.Header style={styles.accordionHeader}>Grievance Redressal</Accordion.Header>
        <Accordion.Body style={styles.accordionBody}>
        <p>
      The Consumer Protection Act provides for better protection of the interests of consumers by establishing consumer councils and other authorities for the settlement of consumer disputes and matters connected therewith.
    </p>

    <h5><strong>Important Features of the Consumer Protection Act:</strong></h5>
    <ul>
      <li>The Act applies to all goods and services unless specifically exempted by the Central Government.</li>
      <li>It covers all sectors – Private, Public, and Co-operative.</li>
      <li>The provisions of the Act are compensatory in nature.</li>
      <li>It provides adjudicatory authorities, which are simple, speedy, and less expensive.</li>
      <li>Establishment of Consumer Protection Councils at the National, State, and District levels.</li>
    </ul>

    <h5><strong>Consumer Rights under the Act:</strong></h5>
    <ul>
      <li>The right to be assured, wherever possible, of access to a variety of goods and services at competitive prices.</li>
      <li>
        The right to be informed about the quality, quantity, potency, purity, standard, and price of goods or services to 
        protect against unfair trade practices.
      </li>
      <li>The right to be protected against the marketing of goods and services which are hazardous to life and property.</li>
      <li>
        The right to be heard and to be assured that consumer interests will receive due consideration at appropriate fora.
      </li>
      <li>
        The right to seek redressal against unfair trade practices, restrictive trade practices, or unscrupulous exploitation 
        of consumers.
      </li>
      <li>The right to consumer education.</li>
    </ul>

    <h5><strong>Consumer Redressal Complaint Mechanism:</strong></h5>
    <p>There are two main mechanisms for consumer complaint redressal:</p>

    <h6><strong>1. Consumer Online Research and Empowerment (CORE) Centre:</strong></h6>
    <ul>
      <li>Online Registration: <a href="http://www.core.nic.in" target="_blank" rel="noopener noreferrer">www.core.nic.in</a></li>
      <li>Call to register your complaint at <strong>1800-11-4000</strong> (Timings: 09:30 AM to 05:30 PM, Except National Holidays).</li>
      <li>SMS your complaint to <strong>8130009809</strong>.</li>
    </ul>

    <h6><strong>2. Consumer Dispute Redressal Commission:</strong></h6>
    <ul>
      <li>National Consumer Dispute Redressal Commission (NCDRC).</li>
      <li>State Consumer Dispute Redressal Commission (SCDRC).</li>
      <li>District Dispute Redressal Commission (DCDRC).</li>
    </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</div>
</div>

      <div style={styles.row}>
       {/*FAQ's Accordion */}
        <div style={styles.col}>
  <h2 style={styles.subHeading}>&#128214; FAQ's</h2>
  <div style={styles.accordionContainer}>
    <Accordion defaultActiveKey={null}>
      {/* First Header */}
      <Accordion.Item eventKey="0">
        <Accordion.Header style={styles.accordionHeader}>FAQs related to Geographical Indications</Accordion.Header>
        <Accordion.Body style={styles.accordionBody}>
        <h5><strong>What are Intellectual Property Rights (IPR)?</strong></h5>
    <p>
      Intellectual property rights are like any other property right. They allow creators or owners of patents, trademarks, or copyrighted works to enjoy the benefits from their efforts.
    </p>

    <h5><strong>What are the different forms of IPR?</strong></h5>
    <ul>
      <li>Patents</li>
      <li>Trademarks</li>
      <li>Industrial Designs</li>
      <li>Copyrights</li>
      <li>Geographical Indications (GI)</li>
      <li>Protection of Plant Varieties and Farmers’ Rights (PPV & FR)</li>
      <li>Semiconductor Integrated Circuit Layout Design (SICLD)</li>
      <li>Trade Secrets/Protection of undisclosed information</li>
    </ul>

    <h5><strong>What is Geographical Indication or GI Tag?</strong></h5>
    <ul>
      <li>It is a form of Intellectual Property Right belonging to a community.</li>
      <li>GI Tag indicates a definite geographical origin.</li>
      <li>The GI Tag is given to agricultural, natural, and manufactured goods.</li>
      <li>A product may be applied for GI status if it has a special quality, reputation, or peculiar characteristics limited to a specific geographical territory.</li>
    </ul>

    <h5><strong>What does a Geographical Indication provide?</strong></h5>
    <ul>
      <li>Prevents misuse of products by third parties claiming origin or quality they do not possess.</li>
      <li>Ensures adherence to applicable standards mentioned in the GI Registry.</li>
    </ul>

    <h5><strong>Key Questions and Answers:</strong></h5>
    <ul>
      <li><strong>Can a Geographical Indication be registered in the name of an individual?</strong> No, it is intended for a community or group.</li>
      <li><strong>Advantages of GI Registration:</strong> Legal protection, negates false trade practices, and acts as a symbol of authenticity.</li>
      <li><strong>Who can apply for GI registration?</strong> Any association of persons, producers, or organizations representing producers.</li>
      <li><strong>Who gives GI Tag in India?</strong> The Registrar of Geographical Indications, headquartered in Chennai.</li>
    </ul>

    <h5><strong>Registration Process for Geographical Indications:</strong></h5>
    <ol>
      <li>Preliminary Examination: Application scrutiny for criteria like uniqueness and specific geographical connection.</li>
      <li>Examination by a Committee: Presentation, site visits, and resolution of objections or amendments.</li>
      <li>GI Status Grant: Registrar publishes the latest list of GI-tagged products in the GI Journal.</li>
    </ol>

    <h5><strong>Other Important Points:</strong></h5>
    <ul>
      <li><strong>Time for GI Registration:</strong> Approximately 12 months.</li>
      <li><strong>Renewal Period:</strong> Every 10 years.</li>
      <li><strong>Validity:</strong> Territorial; rights are enforceable in other countries only if registered there.</li>
      <li><strong>Authorized Users:</strong> Exclusive rights for producers in the designated territory.</li>
      <li><strong>Penalties for Infringement:</strong> Imprisonment (6 months to 2 years) and fines (₹50,000 to ₹2,00,000).</li>
    </ul>

    <h5><strong>Difference Between Geographical Indications and Trademarks:</strong></h5>
    <ul>
      <li>
        <strong>Geographical Indication:</strong> Represents goods originating from a specific place and cannot be licensed or assigned outside that origin.
      </li>
      <li>
        <strong>Trademark:</strong> Represents goods or services from a specific company/individual and can be licensed globally.
      </li>
    </ul>
        </Accordion.Body>
      </Accordion.Item>

      {/* Second Header */}
      <Accordion.Item eventKey="1">
        <Accordion.Header style={styles.accordionHeader}>Product Customization</Accordion.Header>
        <Accordion.Body style={styles.accordionBody}>
        <h5><strong>Can I get the products customized as per my request?</strong></h5>
    <p>
      Yes, most of the Handicraft products can be customized as per your request, provided the design is realizable.
    </p>

    <h5><strong>How can I place a customization request?</strong></h5>
    <p>
      Customers interested in customized products can email us at <a href="mailto:care@gitagged.com">care@gitagged.com</a> along with a detailed description of the intended customization. We will get back to you promptly.
    </p>

    <h5><strong>How much time does it take to share the customized product?</strong></h5>
    <p>
      Since all our Handicraft products are handmade in their respective geographic locations, customization may take relatively more time than regular products. Details such as time and charges will be shared with you during the inquiry process.
    </p>

    <h5><strong>Is there any additional cost for customized products?</strong></h5>
    <p>
      Not necessarily. The cost depends on the type of customization. However, if the customization requires additional resources, there may be nominal extra charges.
    </p>

    <h5><strong>Should I place the order before requesting customization?</strong></h5>
    <p>
      No, you do not need to place an order first. We will provide you with a prototype, and only after you are satisfied with the customization, pricing, and time duration, should you place the order.
    </p>

    <h5><strong>Can I cancel the customization order?</strong></h5>
    <p>
      No, since customized products are tailored to an individual’s requirements, order cancellations will not be considered for refund or exchange unless the product received is different from what was agreed upon during order placement.
    </p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Third Header */}
      <Accordion.Item eventKey="2">
        <Accordion.Header style={styles.accordionHeader}>Reselling, Return & Refund</Accordion.Header>
        <Accordion.Body style={styles.accordionBody}>
        <h5><strong>Who can resell our products?</strong></h5>
    <p>
      Individuals or companies can resell our products. For bulk pricing and discounts, please contact us at <a href="tel:+917353011116">+91 8010405460</a>.
    </p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Fourth Header */}
      <Accordion.Item eventKey="3">
        <Accordion.Header style={styles.accordionHeader}>Order Processing</Accordion.Header>
        <Accordion.Body style={styles.accordionBody}>
        <h4><strong>Registering My Account</strong></h4>
    <h5><strong>Is it mandatory to register my details to buy online?</strong></h5>
    <p>
      No. You may checkout as a guest, but certain details like Name, Phone number, Email ID, and Address are required for order placement.
    </p>
    <h5><strong>Why should I register?</strong></h5>
    <p>
      Registering gives you access to your purchase history, invoices, quicker checkouts, and allows you to manage/edit personal details, change passwords, and track your orders anytime.
    </p>
    <h5><strong>How safe are my details?</strong></h5>
    <p>
      We prioritize the safety and confidentiality of your personal information. For more details, please refer to our <a href="/privacy-policy">Privacy Policy</a>.
    </p>
    <hr />

    <h4><strong>Payments</strong></h4>
    <h5><strong>What are the various modes of Payment?</strong></h5>
    <p>
      GI Tagged offers multiple payment modes: Net banking, Debit Card, Credit Card, and UPI. For international payments, we support Credit Cards and PayPal.
    </p>
    <h5><strong>Will I get confirmation after payment?</strong></h5>
    <p>
      Yes, you will receive an email confirming your order after payment is confirmed.
    </p>
    <h5><strong>How do I check the status of my Order?</strong></h5>
    <p>
      You can check your order details in the "My Account" section located at the top right of the homepage.
    </p>
    <h5><strong>What if the amount is deducted but the order completion page did not appear?</strong></h5>
    <p>
      This can occur due to network issues. Please email us at <a href="mailto:care@gitagged.com">care@gitagged.com</a> with your payment reference, product details, and transaction date. If the payment reflects in our gateway, your order will be processed, and a duplicate invoice sent. If not, we will notify you, and you can contact your bank.
    </p>
    <hr />

    <h4><strong>Shipping</strong></h4>
    <h5><strong>From which locations can I place an order?</strong></h5>
    <p>
      Orders can be placed from any location worldwide, provided you have mobile connectivity and basic logistics.
    </p>
    <h5><strong>What are the delivery charges?</strong></h5>
    <p>
      Delivery charges vary depending on the location, volumetric dimensions, and weight of the product. Some products are shipped free of cost, while others incur nominal charges.
    </p>
    <h5><strong>What is the estimated time of delivery?</strong></h5>
    <p>
      We strive to ship products within 48 hours of order confirmation to ensure timely delivery.
    </p>
    <h5><strong>Are there any additional charges apart from what I see on the website?</strong></h5>
    <p>
      The MRP on the website is inclusive of all taxes. There are no hidden charges at checkout.
    </p>
    <h5><strong>How is the delivery done?</strong></h5>
    <p>
      We primarily use India Post Parcel Service for delivery but also collaborate with various logistics vendors to expedite the process.
    </p>
    <h5><strong>Do you deliver only in India?</strong></h5>
    <p>
      We accept orders from both domestic and international customers. However, for international orders, customs and taxes are borne by the customer in accordance with local laws.
    </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</div>
</div>

       

    </div>
  );
};

export default Cussuport;
