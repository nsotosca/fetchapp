import React from 'react';
import { Grid as MuiGrid } from '@mui/material';

type LayoutContainerProps = {
  isItem?: boolean;
  children: JSX.Element;
}

const Grid = ( { children, isItem }:LayoutContainerProps ) :JSX.Element => {
  return ( <>
    {!isItem
      ? (
        <MuiGrid container spacing={{ xs : 2, md : 3 }} columns={{ xs : 4, sm : 8, md : 12 }}>
          {children}
        </MuiGrid>
      )
      : (
        <MuiGrid item xs={4} sm={4} md={3}>
          {children}
        </MuiGrid>
      )
    }
  </>
  );
};

export default Grid;