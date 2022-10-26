import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from '../users/Search';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar'>
      <Link to='/' className='logo'>
        <i className={icon}></i>&nbsp;
        {title}
      </Link>
      <Search />
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
