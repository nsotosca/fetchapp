import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../Card';
import Grid from '../Grid';
import './PostList.scss';
import { isURL } from '../../utils/utils';
import { baseUrl } from '../../core/api';

type PostListProps = {
  posts: {name:string, url:string}[],
}

const PostList = ( { posts }: PostListProps ): JSX.Element => {
  const navigate  = useNavigate();

  const seeMore = ( value:string ): void => {
    if( isURL( value ) ){
      const path = value.substring( baseUrl.length, value.length );
      navigate ( path );
    }
  };

  const GridItems = (): JSX.Element => {
    return ( <>
      {posts.map( ( post, index ) =>
        <Grid isItem={true} key={index}>
          <Card title={post.name} cardAction={() => seeMore( post.url )} />
        </Grid>
      )}
    </> );
  };

  return (
    <Grid>
      <GridItems />
    </Grid>
  );
};

export default PostList;
