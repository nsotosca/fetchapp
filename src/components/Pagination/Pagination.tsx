import React from 'react';

import { Box, Pagination as MuiPagination, PaginationItem } from '@mui/material';

import { useCheckDeviceScreen } from '../../utils/Hooks';

type PostPaginationProps = {
  pageCount: number;
  page: number;
  classes?: string;
  setPage: ( page:number ) => void;
}

const Pagination = ( props: PostPaginationProps ): JSX.Element => {
  const { pageCount, page, classes, setPage  } = props;
  const { isMobile } = useCheckDeviceScreen( );


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
      />

    </Box>
  );
};

export default Pagination;