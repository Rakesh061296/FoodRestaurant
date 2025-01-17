import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import menu1 from "../img/menu-1.jpg"
import menu2 from "../img/menu-2.jpg"
import menu3 from "../img/menu-3.jpg"



const Menu = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            Food Menu
          </h5>
          <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <i className="fa fa-coffee fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-body">Popular</small>
                  <h6 className="mt-n1 mb-0">Breakfast</h6>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 pb-3"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <i className="fa fa-hamburger fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-body">Special</small>
                  <h6 className="mt-n1 mb-0">Lunch</h6>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <i className="fa fa-utensils fa-2x text-primary"></i>
                <div className="ps-3">
                  <small className="text-body">Lovely</small>
                  <h6 className="mt-n1 mb-0">Dinner</h6>
                </div>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {[...Array(4)].map((_, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={menu1}
                        alt="menu1"
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Idly voda</span>
                          <span className="text-primary">78</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                {[...Array(8)].map((_, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={menu2}
                        alt="menu2"
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                {[...Array(8)].map((_, index) => (
                  <div className="col-lg-6" key={index}>
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src={menu3}
                        alt="menu3"
                        style={{ width: "80px" }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">78</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
