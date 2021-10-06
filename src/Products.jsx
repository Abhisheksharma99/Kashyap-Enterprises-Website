import React from "react";
import productimg from "./images/50-ltr-rocket-can-500x500.jpg";
import "./index.css";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="container mb-4">
      <div className="row text-center mb-4 g-2 g-lg-3">
        <h1 className="productheading border-bottom text-center mb-5 fw-bolder">
          Popular Products
        </h1>
        <div className="col">
          <div className="cardshadow card cardborder">
            <img src={productimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Defoamers</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                className="btn-outline modalbtn btn fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop1"
              >
                <span className='text-white'>View Varients</span>
                <div
                  class="modal fade"
                  id="staticBackdrop1"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel1"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel1">
                          Defoamers
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">Product Varients</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Understood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="cardshadow card cardborder">
            <img src={productimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold text-nowrap">
                Silicone Emulsion
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="#"
                className="modalbtn btn fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop2"
              >
                <span className='text-white'>View Varients</span>
                <div
                  class="modal fade"
                  id="staticBackdrop2"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel2"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel2">
                          Silicone Emulsion
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Understood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cardshadow card cardborder">
            <img src={productimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Paper and Pulp</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="#"
                className="modalbtn btn fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop3"
              >
                <span className='text-white'>View Varients</span>
                <div
                  class="modal fade"
                  id="staticBackdrop3"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel3"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel3">
                          Paper and Pulp
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Understood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cardshadow card cardborder">
            <img src={productimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Car care</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="#"
                className="modalbtn btn fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop4"
              >
                <span className='text-white'>View Varients</span>
                <div
                  class="modal fade"
                  id="staticBackdrop4"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel4"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel4">
                          Car Care
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Understood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link to="/products" className="text-decoration-none">
        <button className="btn btn-lg productbtn d-flex justify-content-center text-center btn-outline fw-bold">
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default Products;
