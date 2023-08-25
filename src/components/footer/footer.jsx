import React from 'react';
import './footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="outer3">
      <footer className="footer-container">
        {/* Add your content here */}
        <div

          className="logo"
        />
        <table className="footer-table">
          <tbody>
            <tr>
              <td className="bold-column column-width-1">
                Company
              </td>
              <td className="bold-column column-width-2">
                Our Programs
              </td>
              <td className="bold-column column-width-3">
                Terms
              </td>
            </tr>
            <tr>
              <td className="column-width-1">
                Home
              </td>
              <td className="column-width-2">
                CodeChamps
              </td>
              <td className="column-width-3">
                Terms & Conditions (Users)
              </td>
            </tr>
            <tr>
              <td className="column-width-1">
                About Us
              </td>
              <td className="column-width-2">
                finChamps
              </td>
              <td className="column-width-3">
                Terms & Conditions (Vendors)
              </td>
            </tr>
            <tr>
              <td className="column-width-1">
                Curriculum
              </td>
              <td className="column-width-2">
                RoboChamps
              </td>
              <td className="column-width-3">
                Privacy Policy (Users)
              </td>
            </tr>
            <tr>
              <td className="column-width-1">
                Blog
              </td>
              <td className="column-width-2"></td>
              <td className="column-width-3">
                Privacy Policy (Vendors)
              </td>
            </tr>
            <tr>
              <td className="column-width-1">
                Career
              </td>
              <td className="column-width-2"></td>
              <td className="column-width-3">
                Refund & Cancellation
              </td>
            </tr>
            <tr>
              <td className="column-width-1">
                Pay by Coupon Code
              </td>
              <td className="column-width-2"></td>
              <td className="column-width-3">
                Disclaimer
              </td>
            </tr>
          </tbody>
        </table>
        <div className="clearfix"></div>

        {/* HR element */}
        <hr className="hr-divider" />


        <div className="contact-info">
          <p className="contact-text">
            INDONESIA - Axa Tower 45th floor, JL prof. Dr Satrio Kav. 18, Kel. Karet Kuningan, Kec. Setiabudi, Kota Adm. Jakarta Selatan, Prov. DKI Jakarta
          </p>
          <p className="contact-text">
            INDIA – H.No. 8-2-699/1, SyNo. 346, Rd No. 12, Banjara Hills, Hyderabad, Telangana – 500034
          </p>
          <p className="contact-text">
            SINGAPORE – 60 Paya Lebar Road#05-16, Paya Lebar Square Singapore (409051)
          </p>
          <p className="contact-text">
            USA: 251, Little Falls Drive, Wilmington, Delaware 19808
          </p>
        </div>

        <div className="email-us">
          Email us at support@brightchamps.com
        </div>
        <div className="email-us newC" >
          © Copyright 2022 BrightCHAMPS
        </div>
        <div className="social-icons">
          <div className="icon icon1">
            {/* Icon 1 */}

          </div>
          <div className="icon icon2">

            {/* Icon 2 */}
          </div>
          <div className="icon icon3">

            {/* Icon 3 */}
          </div>
          <div className="icon icon4">

            {/* Icon 3 */}
          </div>
        </div>
        <div className="footer-shadow">
          {/* Your other footer content */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;