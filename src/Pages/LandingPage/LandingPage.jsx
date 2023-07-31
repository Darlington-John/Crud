import React from 'react';
import './LandingPage.css';
import Navbar from '../../Components/NavBar/NavBar';
import Body from '../../Body/BodySections';
import { Footer } from '../../Components/Footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default LandingPage;
