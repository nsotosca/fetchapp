import React from 'react';
import App from './App';
import '@testing-library/jest-dom';
import { renderWithRouter } from './utils/test-utils';

test( 'App render success', () => {
  renderWithRouter( <App /> );
} );
