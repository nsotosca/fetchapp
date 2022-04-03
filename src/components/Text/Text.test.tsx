import React from 'react';
import { render } from '@testing-library/react';
import Text, { TextProps } from './Text';

const getRender = ( props: TextProps ) => {
  return render( <Text {...props}/> );
};

describe( 'Text', () => {
  it( 'Should render success', () => {
    const props: TextProps = {
      children     : 'Titulo',
      headingLevel : 'h1',
      classes      : 'title'
    };
    const { getByText } = getRender( props );
    const element = getByText( 'Titulo' );
    expect( element ).toBeInTheDocument();
    expect( element ).toHaveClass( 'title' );
  } );

  it( 'Should render default heading', () => {
    const props: TextProps = {
      children : 'Titulo'
    };
    const { getByText } = getRender( props );
    const element = getByText( 'Titulo' );
    expect( element ).toBeInTheDocument();
    expect( element ).toHaveClass( 'text-p' );
  } );
} );