import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Logo from '../../img/projment-O.svg';
import { connect } from 'react-redux';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue-grey">
      <div className="container">
        <Link to="/" className="brand-logo left">
          <img src={Logo} alt="projment" className="logo" />
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
