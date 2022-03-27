import React from 'react';

import './Header.scss';

import Icon from '../../../Icon';
import Logo from '../../../../assets/images/chewbacca_icon.svg';
import peopleIcon from '../../../../assets/images/people_icon.svg';
import planetIcon from '../../../../assets/images/planet_icon.svg';
import { Link } from 'react-router-dom';


const Header = (): JSX.Element => {
  return ( <>
    <div className='header'>
      <Link to="/" className='header-link-home'>
        <h1 className='header-title'>Star Chewie</h1>
        <span><Icon image={Logo} classes='header-icon'/></span>
      </Link>
    </div>
    <nav className='header-nav'>
      <Link to="/people"><Icon image={peopleIcon} classes='header-nav-icon'alt='Characters'/></Link>
      <Link to="/planets"><Icon image={planetIcon} classes='header-nav-icon' alt='Planets'/></Link>
    </nav>
  </>
  );
};

export default Header;