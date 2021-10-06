import React from "react";
import "./index.css";
import WhiteLogo from "./WHITE-LOGO-1.png";
import IndiamartLogo from "./images/IndiamartLogo.svg";
const Footer = () => {
  return (
    <div className="container-fluid bg-dark footerbg">
      <footer className="text-center text-lg-start text-white">
        <section className="d-flex justify-content-between p-4 sociallinks">
          <div className="me-5">
            <span className='fw-bolder'>Get connected with us on social networks:</span>
          </div>

          <div class="iconcontainer">
        <a class="linkicon linkedin">
            <i class="fab fa-2x fa-linkedin"></i>
        </a>
        <a class="linkicon twitter">
            <i class="fab fa-2x fa-twitter"></i>
        </a>
        <a class="linkicon instagram">
            <i class="fab fa-2x fa-instagram"></i>
        </a>
        <a class="linkicon youtube">
            <i class="fab fa-2x fa-youtube"></i>
        </a>
        <a class="linkicon facebook">
            <i class="fab fa-2x fa-facebook-f"></i>
        </a>
        <a class="linkicon whatsapp">
            <i class="fab fa-2x fa-whatsapp"></i>
        </a>
    </div>
            
          
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img src={WhiteLogo} alt="logo" className="footlogo" />
                <h6 className="text-uppercase fw-bold">Kashyap Enterprises</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  Kashyap Enterprises (KE) is a chemical manufacturing comany
                  founded by Ranjeet Banerjee in 2003 in Faridabad, India.
                  
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Popular Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#!" className="text-white">
                    Defoamers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Silicone Emulsions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Paper and Pulp Chemicals
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Car Care Products
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p><br/>
                  <a href="#!" className="text-white">
                    Kashyap Enterprises on Indiamart
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Query?
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact & Address</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                
                <p><br/>
                  <i className="fas fa-home mr-3"></i> 566 , Sector-55 , Faridabad, Haryana India
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i><a className='text-decoration-none text-white' href="mailto:sales@kashyapenterprises.com">sales@kashyapenterprises.com</a><br />
                  <i className="fas fa-envelope mr-3"></i><a className='text-decoration-none text-white' href="mailto:info@kashyapenterprises.com">info@kashyapenterprises.com</a>
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i><a className='text-decoration-none text-white' href="tel:+91 7019 797 893">+91 7019 797 893</a> ,<br />
                  <i className="fas fa-phone mr-3"></i><a className='text-decoration-none text-white' href="tel:+91 9811 407 452">+91 9811 407 452</a>
                </p>
                
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-3 fw-bold">
          © 2021 Copyright:
          <a
            className="text-white ms-2 fw-bold"
            target="_blank"
            href="https://www.kashyapenterprises.com/"
          >
            KashyapEnterprises
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
