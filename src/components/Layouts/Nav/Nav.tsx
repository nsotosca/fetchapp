import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../..';
import peopleIcon from '../../../assets/images/people_icon.svg';
import planetIcon from '../../../assets/images/planet_icon.svg';

import './Nav.scss';

const Nav = (): JSX.Element => {
  return (
    <nav className='nav'>
      <Link to="/people">
        <Icon image={peopleIcon} classes='nav-icon'alt='Characters'/>
      </Link>
      <Link to="/planets">
        <Icon image={planetIcon} classes='nav-icon' alt='Planets'/>
      </Link>
    </nav>
  );
};

export default Nav;