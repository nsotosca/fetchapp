import React from 'react';

import { Box, Pagination as MuiPagination } from '@mui/material';

type PostPaginationProps = {
  pageCount: number;
  page: number;
  setPage: ( page:number ) => void;
}

const Pagination = ( props: PostPaginationProps ): JSX.Element => {
  const { pageCount, page, setPage  } = props;

  return (
    <Box display='flex' justifyContent='center' margin={2}>
      <MuiPagination
        page={page}
        variant='outlined'
        size='medium'
        count={pageCount}
        onChange={( _, page ) => setPage( page )}
      />
    </Box>
  );
};

export default Pagination;