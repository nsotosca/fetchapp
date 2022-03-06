import React from 'react';
import { useTranslation } from 'react-i18next';

type PostItemProps = {
  postKey: string;
  value: string | number | boolean;
}

const PostItem = ( props: PostItemProps ) :JSX.Element => {
  const { postKey, value } = props;
  const { t } = useTranslation();

  return (
    <li>{t( postKey )}: { value }</li>
  );
};

export default PostItem;