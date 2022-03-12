import React from 'react';

import {
  Container as MuiContainer,
  ContainerProps as MuiContainerProps,
  CssBaseline
} from '@mui/material';

type ContainerProps = {
  children: JSX.Element;
  /** 
   * True to use as inner container, default: false
  */
  isInnerCointainer?: boolean;
  classes?: string;
}

const Container = ( props: ContainerProps ) :JSX.Element => {
  const { children, isInnerCointainer = false, classes } = props;

  const containerProps: MuiContainerProps = isInnerCointainer
    ? {
      disableGutters : false,
      maxWidth       : 'lg'
    }
    : {
      disableGutters : true,
      maxWidth       : false
    };

  if( isInnerCointainer ) {
    return ( <MuiContainer {...containerProps} className={classes}> {children}</MuiContainer> );
  }

  return (
    <>
      <CssBaseline />
      <MuiContainer {...containerProps} className={classes}>
        {children}
      </MuiContainer>
    </>
  );
};

export default Container;