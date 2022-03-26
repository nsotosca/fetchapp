import React from 'react';

import { Box, Pagination as MuiPagination, PaginationItem } from '@mui/material';

import { useCheckDeviceScreen } from '../../utils/Hooks';

type PaginationProps = {
  pageCount: number;
  page: number;
  postPerPage: number;
  classes?: string;
  setPage: ( page:number ) => void;
  children: JSX.Element
}

const Pagination = ( props: PaginationProps ): JSX.Element => {
  const { pageCount, page, postPerPage, classes, setPage, children  } = props;
  const { isMobile } = useCheckDeviceScreen( );

  const getPagination = () => {
    return (
      <Box display='flex' justifyContent='center' margin={2}>
        <MuiPagination
          page={page}
          variant='outlined'
          size='medium'
          count={pageCount}
          siblingCount={isMobile() ? 0 : 1}
          onChange={( _, page ) => setPage( page )}
          renderItem={( item ) => (
            <PaginationItem
              className={classes}
              {...item}
            />
          )}
        /></Box>
    );
  };


  return ( <>
    {getPagination()}
    {children}
    {postPerPage > 8 && getPagination()}
  </>
  );
};

export default Pagination;