import React from 'react';

import Logo from '../../assets/images/darth-vader_icon.svg';

import './Loader.scss';

const Loader = ():JSX.Element => {
  return (
    <div className='loader'>
      <img src={Logo} className='loader-img' alt='loader'/>
    </div>
  );
};

export default Loader;
