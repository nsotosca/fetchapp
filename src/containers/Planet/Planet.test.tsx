import React from 'react';
import Planet from './Planet';
import { renderWithRouter } from '../../utils/test-utils';

jest.mock( 'react-i18next', () => ( {
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation : () => {
    return {
      t    : ( str:string ) => str,
      i18n : {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        changeLanguage : () => new Promise( () => {} )
      }
    };
  }
} ) );

test( 'Planet render success', () => {
  renderWithRouter( <Planet />, { route : '/planets/1' } );
} );