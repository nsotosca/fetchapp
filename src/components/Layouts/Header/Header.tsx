import React from 'react';
import { Link } from 'react-router-dom';

import { Icon, Text } from '../..';
import Logo from '../../../assets/images/chewbacca_icon.svg';

import './Header.scss';

const Header = (): JSX.Element => {
  return (
    <div className='header'>
      <Link to="/" className='header-link-home'>
        <Text headingLevel='h1' classes='header-title'>Star Chewie</Text>
        <span><Icon image={Logo} classes='header-icon'/></span>
      </Link>
    </div>
  );
};

export default Header;