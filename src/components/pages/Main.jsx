import React, { useState, useEffect } from 'react'
import "./Header"
import Header from './Header'
import Service from './Service'
import About from './About'
import Menu from './Menu'
// import Reservation from './Reservation'
import OurRestaurant from './OurRestorant'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Spinner from '../Loading/Spinner'

const Main = () => {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
     {loading ? (
        <Spinner />
      ) : (
        <>
      <Header/>
      <Service/>
      <About/>
      <OurRestaurant/>
      <Menu/>
      {/* <Reservation/> */}
      <Testimonial/>
      <Footer/>
      </>
      )}
    </div>
  )
}

export default Main
