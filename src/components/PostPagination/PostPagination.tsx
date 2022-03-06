import React from 'react';

import { Box, Pagination } from '@mui/material';

type PostPaginationProps = {
  pageCount: number;
  setPage: ( page:number ) => void;
}

const PostPagination = ( props:PostPaginationProps ):JSX.Element => {
  const { pageCount, setPage  } = props;

  return (
    <Box display='flex' justifyContent='center' margin={2}>
      <Pagination
        variant='outlined'
        size='medium'
        count={pageCount}
        onChange={( _, page ) => setPage( page )}
      />
    </Box>
  );
};

export default PostPagination;