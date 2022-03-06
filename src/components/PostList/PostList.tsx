import React from 'react';
import PostItem from '../PostItem';

type PostListProps = {
  posts: []
}

const PostList = ( props: PostListProps ) :JSX.Element => {
  const { posts } = props;
  return (
    <div>
      {
        posts?.length &&
        posts.map( ( post, index ) =>
          <ul key={index}>
            {Object.keys( post ).map( ( key, index ) =>
              <PostItem  key={index} postKey={key} value={post[key]}/>
            )}
          </ul> )
      }
    </div>
  );
};

export default PostList;