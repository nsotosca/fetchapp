import React from 'react';

import Icon from '../../components/Icon';
import Logo from '../../assets/images/chewbacca_icon.svg';

import './Loader.scss';

const Loader = ():JSX.Element => {
  return (
    <div className='loader'>
      <Icon image={Logo} classes='loader-icon'/>
    </div>
  );
};

export default Loader;
