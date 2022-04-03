// test utils file
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderWithRouter = ( ui:any, { route = '/' } = {} ) => {
  window.history.pushState( {}, 'Test page', route );

  return render( ui, { wrapper : BrowserRouter } );
};