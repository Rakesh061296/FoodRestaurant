import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import hero from "../img/hero.png"
import { Link } from 'react-router-dom';
import style from "../../components/css/style.css"
import bootstrap from "../css/bootstrap.min.css"



const Header = () => {
  return (
    <div>

   
    <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3"></i>Foodie Delight
          </h1>
          {/* <img src="img/logo.png" alt="Logo" /> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <Link to="#" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="#" className="nav-item nav-link">
              About
            </Link>
            <Link to="#" className="nav-item nav-link">
              Service
            </Link>
            <Link to="#" className="nav-item nav-link">
              Menu
            </Link>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="#"  className="dropdown-item">
                  Booking
                </Link>
                <Link to="#" className="dropdown-item">
                  Our Team
                </Link>
                <Link to="#" className="dropdown-item">
                  Testimonial
                </Link>
              </div>
            </div>
            <Link to="#" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link to="/#" className="btn btn-primary py-2 px-4">
            Book your order
          </Link>
        </div>
      </nav>

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Enjoy Our<br />Delicious Meal
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link to="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft" alert ="bbdjbj">
                Book your Orders
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src={hero} alt="Delicious Meal" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
