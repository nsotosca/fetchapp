import React, { useEffect, useState } from 'react';

import { PostList, Pagination, Loader, Text } from '../../components';
import { getTotalPages } from '../../utils/utils';

import './Posts.scss';

type PostsProps = {
  data: {name:string, url:string}[];
  totalDataCount: number;
  title: string;
  isLoading: boolean;
  page: number;
  onSetPage: React.Dispatch<React.SetStateAction<number>>;
}

const Posts = ( props: PostsProps ): JSX.Element => {
  const { data, totalDataCount, title, page, onSetPage, isLoading } = props;
  const [ pageCount, setPageCount ] = useState( 0 );
  const [ postPerPage, setPostPerPage ] = useState( 0 );

  useEffect( () => {
    if( data && data.length > 1 ){
      if( !pageCount ){
        setPageCount ( getTotalPages( totalDataCount, data.length ) );
      }
      setPostPerPage( data.length );
    }
  }, [data] );

  return (
    isLoading
      ? <Loader />
      : <div className='posts'>
        <Text headingLevel='h2'>{title}</Text>
        <Pagination
          postPerPage={postPerPage}
          pageCount={pageCount} page={page}
          setPage={onSetPage}
          classes={'posts-pagination-item'}
        >
          <PostList posts={data} />
        </Pagination>
      </div>
  );
};

export default Posts;
