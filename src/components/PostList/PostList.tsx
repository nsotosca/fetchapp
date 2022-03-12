import React from 'react';

import Card from '../Card';
import Grid from '../Grid';
import PostItem from '../PostItem';

import { ObjectKeys } from '../../utils/utils';

type PostListProps = {
  posts: ObjectKeys[]
}

const PostList = ( { posts }: PostListProps ): JSX.Element => {

  return (
    <Grid>
      <>
        {
          posts?.length &&
          posts.map( ( post, index ) =>{
            return ( <Grid isItem={true} key={index}>
              <Card key={index} title={post?.name as string} >
                <>
                  {Object.keys( post ).map( ( key, index ) =>
                    <PostItem  key={index} postKey={key} value={post[key]}/>
                  )}
                </>
              </Card>
            </Grid> );  } )

        }
      </>
    </Grid>
  );
};

export default PostList;