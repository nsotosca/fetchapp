import React from 'react';

type PostItemProps = {
  postKey: string;
  value: string;
}

const PostItem = ( props: PostItemProps ) :JSX.Element => {
  const { postKey, value } = props;
  return (
    <li>{ postKey }: { value }</li>
  );
};

export default PostItem;