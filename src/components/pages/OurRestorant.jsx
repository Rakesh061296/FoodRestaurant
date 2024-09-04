import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import Modal from 'react-modal';
import "./Modalpopupres.css";

const OurRestaurant = () => {
  const [restaurants, setRestaurants] = useState([
    {
      name: 'Ambur Hot Dum Biriyani',
      type: 'Non-Veg',
      description: 'This place is known for vegan options, customizable dishes, outdoor seating, family crowd, weekend brunch, good wifi. Elaborate menu with flavorful dishes.',
      image: 'https://content.jdmagicbox.com/v2/comp/bangalore/p7/080pxx80.xx80.151118154908.a1p7/catalogue/ambur-hot-dum-biryani-closed-down--c-v-raman-nagar-bangalore-restaurants-161xdih.jpg',
    },
    {
      name: 'Udipi Hotel',
      type: 'Veg',
      description: 'This is one of the best hotel in Bangalore. Breakfast is very nice. I like to eat Vada with Sambar. Here you can get no of Dosas like Onion dosa, masala dosa.',
      image: 'https://content.jdmagicbox.com/v2/comp/bangalore/t4/080pxx80.xx80.200302211108.u1t4/catalogue/shree-udupi-vaibhava-indiranagar-bangalore-restaurants-u3h9z98pxc.jpg'
    }
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    type: 'Veg',
    description: '',
    image: ''
  });

  const [errors, setErrors] = useState({});
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [restaurantToDelete, setRestaurantToDelete] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
     // Reset the form fields
     setNewRestaurant({
      name: '',
      type: 'Veg', // Reset to default value if needed
      description: '',
      image: ''
  });
    setErrors({});
  };

  const openDeleteModal = (index) => {
    setRestaurantToDelete(index);
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
    setRestaurantToDelete(null);
  };

  const handleDelete = () => {
    if (restaurantToDelete !== null) {
      const updatedRestaurants = restaurants.filter((_, index) => index !== restaurantToDelete);
      setRestaurants(updatedRestaurants);
      closeDeleteModal();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRestaurant({ ...newRestaurant, [name]: value });
  };

  const validateForm = () => {
    const { name, description, image } = newRestaurant;
    let isValid = true;
    let validationErrors = {};

    if (name.trim().length < 3) {
      validationErrors.name = 'Restaurant name must be at least 3 characters long.';
      isValid = false;
    }

    if (description.trim().length < 10 || description.trim().length > 200) {
      validationErrors.description = 'Description must be between 10 and 200 characters long.';
      isValid = false;
    }


    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(image.trim())) {
      validationErrors.image = 'Please enter a valid URL for the image.';
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setRestaurants([...restaurants, newRestaurant]);
       // Reset the form fields
       setNewRestaurant({
        name: '',
        type: 'Veg', // Reset to default value if needed
        description: '',
        image: ''
    });
      closeModal();
    }
  };

  return (
    <div className="container-xxl pt-5 pb-3" >
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">Restaurants</h5>
          <h1 className="mb-5">Our Top Restaurants</h1>
          <button className="btn btn-primary py-3 px-5 mt-2" onClick={openModal} style={{marginBottom:"20px"}}>
            Add Restaurant
          </button>
        </div>
        
        <div className="row g-4">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item text-center rounded overflow-hidden position-relative">
                <div className="position-absolute top-0 end-0 mt-2 me-2">
                  <button 
                    className="btn btn-sm btn-danger" 
                    onClick={() => openDeleteModal(index)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
                <div className="overflow-hidden m-4">
                  <img className="img-fluid" src={restaurant.image} alt={restaurant.name} />
                </div>
                <h5 className="mb-0">{restaurant.name}</h5>
                <small className="d-block text-muted">{restaurant.type}</small>
                <small>{restaurant.description}</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-square btn-primary mx-1" href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal 
          isOpen={modalIsOpen} 
          onRequestClose={closeModal}
          contentLabel="Add Restaurant"
          className="Modal"
          overlayClassName="Overlay"
        >
          <h2>Add a New Restaurant</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label  className="form-label">Restaurant Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={newRestaurant.name}
                onChange={handleInputChange}
               
                minLength="3"
                maxLength="50"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <label  className="form-label">Restaurant Type</label>
              <select
                className="form-select"
                id="type"
                name="type"
                value={newRestaurant.type}
                onChange={handleInputChange}
              >
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Veg & Non-Veg">Both</option>
              </select> 
            </div>
            <div className="mb-3">
              <label  className="form-label">Description</label>
              <input
                type="text"
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                id="description"
                name="description"
                value={newRestaurant.description}
                onChange={handleInputChange}
                
                minLength="10"
                maxLength="200"
              />
              {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image URL</label>
              <input
                type="url"
                className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                id="image"
                name="image"
                value={newRestaurant.image}
                onChange={handleInputChange}
                
              />
              {errors.image && <div className="invalid-feedback">{errors.image}</div>}
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary me-2">Add</button>
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </Modal>

        {/* Modal for Deleting Restaurant */}
        <Modal 
          isOpen={deleteModalIsOpen} 
          onRequestClose={closeDeleteModal}
          contentLabel="Delete Restaurant"
          className="Modal"
          overlayClassName="Overlay"
        >
          <h2>Are you sure you want to delete this restaurant?</h2>
          <div className="d-flex justify-content-end">
            <button className="btn btn-danger me-2" onClick={handleDelete}>Yes</button>
            <button className="btn btn-secondary" onClick={closeDeleteModal}>Cancel</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default OurRestaurant;
