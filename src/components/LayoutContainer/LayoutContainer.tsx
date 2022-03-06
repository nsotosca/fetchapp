import React from 'react';
import Grid from '@mui/material/Grid';

type LayoutContainerProps = {
  isItem?: boolean;
  children: JSX.Element;
}

const LayoutContainer = ( { children, isItem }:LayoutContainerProps ) :JSX.Element => {
  return ( <>
    {!isItem
      ? (
        <Grid container spacing={{ xs : 2, md : 3 }} columns={{ xs : 4, sm : 8, md : 12 }}>
          {children}
        </Grid>
      )
      : (
        <Grid item xs={4} sm={4} md={3}>
          {children}
        </Grid>
      )
    }
  </>
  );
};

export default LayoutContainer;