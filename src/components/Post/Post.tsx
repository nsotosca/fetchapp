import React from 'react';

import { Loader, PostListItem, Text } from '..';
import { ObjectKeys } from '../../utils/utils';

import './Post.scss';

type PostProps = {
  data: ObjectKeys;
  title: string;
  isLoading: boolean;
}

const Post = ( { data, title, isLoading }: PostProps ): JSX.Element => {
  return (
    isLoading
      ? <Loader />
      : <>
        <Text headingLevel='h2'>{title}</Text>
        <PostListItem post={data}/>
      </>
  );
};

export default Post;
