import React from 'react';

import './Footer.scss';

const Footer = (): JSX.Element => {
  return (
    <div className='footer-container'>
      <hr className='footer-divider' />
      <p className='footer-copyright'>@ Copy Left 2022</p>
    </div>
  );
};

export default Footer;