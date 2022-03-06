import React from 'react';
import { ObjectKeys } from '../../utils/utils';
import PostItem from '../PostItem';
import LayoutContainer from '../LayoutContainer';
import Card from '../Card';

type PostListProps = {
  posts: ObjectKeys[]
}

const PostList = ( props: PostListProps ) :JSX.Element => {
  const { posts } = props;
  return (
    <LayoutContainer>
      <>
        {
          posts?.length &&
          posts.map( ( post, index ) =>{
            return ( <LayoutContainer isItem={true} key={index}>
              <Card key={index} title={post?.name as string} >
                <>
                  {Object.keys( post ).map( ( key, index ) =>
                    <PostItem  key={index} postKey={key} value={post[key]}/>
                  )}
                </>
              </Card>
            </LayoutContainer> );  } )

        }
      </>
    </LayoutContainer>
  );
};

export default PostList;