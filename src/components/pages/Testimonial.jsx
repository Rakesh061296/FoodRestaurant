// import React, { useEffect } from 'react';
// import $ from 'jquery'; // Import jQuery
// import 'owl.carousel/dist/assets/owl.carousel.min.css'; // Import Owl Carousel CSS
// import 'owl.carousel'; // Import Owl Carousel JS
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is imported

// const Testimonial = () => {
//   useEffect(() => {
//     // Initialize Owl Carousel
//     $('.testimonial-carousel').owlCarousel({
//       loop: true,
//       margin: 10,
//       nav: true,
//       autoplay: true,
//       responsive: {
//         0: {
//           items: 1,
//         },
//         600: {
//           items: 2,
//         },
//         1000: {
//           items: 3,
//         },
//       },
//     });
//   }, []);

//   return (
//     <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
//       <div className="container">
//         <div className="text-center">
//           <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
//           <h1 className="mb-5">Our Clients Say!!!</h1>
//         </div>
//         <div className="owl-carousel testimonial-carousel">
//           <div className="testimonial-item bg-transparent border rounded p-4">
//             <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
//             <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
//             <div className="d-flex align-items-center">
//               <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" alt="Client 1" style={{ width: '50px', height: '50px' }} />
//               <div className="ps-3">
//                 <h5 className="mb-1">Client Name</h5>
//                 <small>Profession</small>
//               </div>
//             </div>
//           </div>
//           <div className="testimonial-item bg-transparent border rounded p-4">
//             <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
//             <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
//             <div className="d-flex align-items-center">
//               <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" alt="Client 2" style={{ width: '50px', height: '50px' }} />
//               <div className="ps-3">
//                 <h5 className="mb-1">Client Name</h5>
//                 <small>Profession</small>
//               </div>
//             </div>
//           </div>
//           <div className="testimonial-item bg-transparent border rounded p-4">
//             <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
//             <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
//             <div className="d-flex align-items-center">
//               <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" alt="Client 3" style={{ width: '50px', height: '50px' }} />
//               <div className="ps-3">
//                 <h5 className="mb-1">Client Name</h5>
//                 <small>Profession</small>
//               </div>
//             </div>
//           </div>
//           <div className="testimonial-item bg-transparent border rounded p-4">
//             <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
//             <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
//             <div className="d-flex align-items-center">
//               <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" alt="Client 4" style={{ width: '50px', height: '50px' }} />
//               <div className="ps-3">
//                 <h5 className="mb-1">Client Name</h5>
//                 <small>Profession</small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

// index.js or App.js

import React from 'react';
import Slider from 'react-slick';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome is imported
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimo.css"
import mypic from "../img/MYPIC.jpg"

const testimonials = [
  {
    id: 1,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    img: `${mypic}`,
    name: "Rakesh",
    profession: "Meghan's Food",
  },
  {
    id: 2,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    img: `${mypic}`,
    name: "Rakesh",
    profession: "Naidu palace Biryani",
  },
  {
    id: 3,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
   img: `${mypic}`,
    name: "Rakesh",
    profession: "Ambur hot Dum Biryani",
  },
  {
    id: 4,
    text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    img: `${mypic}`,
    name: "Rakesh",
    profession: "AMMA Biriyani center",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
          <h1 className="mb-5">Our Customer Reviews!!!</h1>
        </div>
        <Slider {...settings} className="testimonial-carousel">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
              <p>{testimonial.text}</p>
              <div className="d-flex align-items-center">
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src={testimonial.img}
                  alt={`Client ${testimonial.id}`}
                  style={{ width: '50px', height: '50px' }}
                />
                <div className="ps-3">
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <small>{testimonial.profession}</small>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;


