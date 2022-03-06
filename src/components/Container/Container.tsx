import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container as MuiContainer } from '@mui/material';

type ContainerProps = {
  children: JSX.Element;
}

const Container = ( { children }:ContainerProps ) :JSX.Element => {
  return (
    <>
      <CssBaseline />
      <MuiContainer maxWidth="lg">
        <Box sx={{ height : '100vh' }} >
          {children}
        </Box>
      </MuiContainer>
    </>
  );
};

export default Container;