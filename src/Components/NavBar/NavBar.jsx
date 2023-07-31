import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { toggleNav } from './../../JavaScript.js';
import './NavBar.css';

import CrudLogo from './../../Assets/Images/Crud.png';

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [icon, setIcon] = useState(faBars);

  const handleToggleNav = () => {
    toggleNav();
    setIsOverlayOpen(!isOverlayOpen);
    setIcon(isOverlayOpen ? faBars : faTimes);
  };

  return (
    <div>
      <div className="NavBar">
        <div className="Links">
          <a href="#" className="Logo">
            <img src={CrudLogo} />
          </a>
          <div className="Nav">
            <a href="#">Features</a>
            <a href="#">How does it work</a>
            <a href="#" className="launch">
              Launch wallet
            </a>
          </div>

          <div className="BarsIcon" onClick={handleToggleNav}>
            <a>
              <FontAwesomeIcon
                id="barsIcon"
                icon={icon}
                style={{ fontSize: '35px' }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="Overlay" id="myNav">
        <div className="Overlay-content">
          <a href="#">Rent</a>
          <a href="#">Buy</a>
          <a href="#">Shortlet</a>
          <a href="#">Developers</a>
          <a href="#">Articles</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
