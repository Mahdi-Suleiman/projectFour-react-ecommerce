import React from 'react';

import Youtube from '../components/Api/Youtube/Youtube.jsx'
import Heroimg from '../components/heroImage/heroImage.js';
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  return (

    <div className="container1"  >
      <Heroimg />
      <Youtube />
      <Testimonials />
    </div>

  );
}

export default Home;
