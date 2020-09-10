import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import frutos from '../images/frutos.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" width="50px" height="50px" src={frutos} alt="Logo" />
            Frutos  Frescos 
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
