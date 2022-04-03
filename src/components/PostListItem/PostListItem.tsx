import React from 'react';

import { useTranslation } from 'react-i18next';
import { ObjectKeys } from '../../utils/utils';

import './PostListItem.scss';

type PostListItemProps = {
  post: ObjectKeys
}

const PostListItem = ( { post }: PostListItemProps ): JSX.Element => {
  const { t } = useTranslation();

  const Item = (): JSX.Element => {
    return (
      <>
        {Object.keys( post ).map(
          ( key, index ) =>{
            return (
              <li key={index} className='post-list-item-li'>
                <span className='post-list-item-key'>
                  { t( key ) + ': '}
                </span>
                { post[key] }
              </li>
            );
          }
        )}
      </> );
  };

  return (
    <ul className='post-list-item'>
      <Item />
    </ul>
  );
};

export default PostListItem;
