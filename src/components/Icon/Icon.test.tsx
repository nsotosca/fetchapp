import React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconProps } from './Icon';

const getRender = ( props: IconProps ) => {
  return render( <Icon {...props}/> );
};

describe( 'Icon', () => {
  it( 'Should render success', () => {
    const props = {
      image : 'icon.png',
      alt   : 'icon'
    };
    const { getByAltText } = getRender( props );
    const icon = getByAltText( 'icon' );
    expect( icon ).toBeInTheDocument();
  } );

  it( 'Should have className', () => {
    const props = {
      image   : 'icon.png',
      classes : 'icon'
    };
    const { getByAltText } = getRender( props );
    const icon = getByAltText( 'icon' );
    expect( icon ).toHaveClass( 'icon' );
  } );
} );