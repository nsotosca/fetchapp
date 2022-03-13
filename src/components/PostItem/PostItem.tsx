import React from 'react';

import { useTranslation } from 'react-i18next';

type PostItemProps = {
  postKey: string;
  value: string | number | boolean;
  classes: string;
}

const PostItem = ( props: PostItemProps ) :JSX.Element => {
  const { postKey, value, classes } = props;
  const { t } = useTranslation();

  return (
    <>
      <span className={classes}>{t( postKey )}:</span> { value }
    </>
  );
};

export default PostItem;