import React from 'react';

import './Header.scss';

import Icon from '../../components/Icon';
import Logo from '../../assets/images/chewbacca_icon.svg';

const Header = (): JSX.Element => {
  return (
    <div className='header'>
      <p className='header-title'>Star Wars</p>
      <span><Icon image={Logo} classes='header-icon'/></span>
    </div>
  );
};

export default Header;