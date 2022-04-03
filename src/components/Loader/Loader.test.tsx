import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

test( 'Loader render success', () => {
  const { getByAltText } = render( <Loader /> );
  const loader = getByAltText( 'loader' );
  expect( loader ).toBeInTheDocument();
} );
