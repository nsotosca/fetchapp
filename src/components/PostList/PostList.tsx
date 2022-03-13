import React from 'react';

import Card from '../Card';
import Grid from '../Grid';
import PostItem from '../PostItem';

import { ObjectKeys } from '../../utils/utils';

import './PostList.scss';

type PostListProps = {
  posts: ObjectKeys[]
}

const PostList = ( { posts }: PostListProps ): JSX.Element => {

  return (
    <Grid>
      <>
        {
          posts?.length &&
          posts.map( ( post, index ) => {
            return (
              <Grid isItem={true} key={index}>
                <Card key={index} title={post?.name as string}>
                  <ul className='post-list-item'>
                    {Object.keys( post ).map( ( key, index ) =>
                      <li key={index}>
                        <PostItem postKey={key} value={post[key]} classes='post-list-tag'/>
                      </li>
                    )}
                  </ul>
                </Card>
              </Grid> );
          } )
        }
      </>
    </Grid>
  );
};

export default PostList;