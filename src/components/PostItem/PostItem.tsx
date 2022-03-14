import React from 'react';

import { useTranslation } from 'react-i18next';

import { useApi } from '../../utils/Hooks';


type PostItemProps = {
  postKey: string;
  value: string | string[];
  classes: string;
}

const PostItem = ( props: PostItemProps ) :JSX.Element => {
  const { postKey, value, classes } = props;
  const { t } = useTranslation();
  const isUrl = value.toString().split( '/', 6 ).length > 5;
  const url = isUrl ? ( value.toString().split( '/', 6 ).slice( 4, 6 ).join( '/' ) + '/' ) : '';
  const { data } = useApi( url, ['name'], false );

  const Value = (): JSX.Element => {
    if( !url ) {
      return t( value );
    }
    if( data.length > 0 ) {
      return  t( data[0].name );
    }

    return <>Cargando...</>;
  };


  return (
    <li>
      <span className={classes}>
        {t( postKey ) + ': '}
      </span>
      <Value />
    </li>
  );
};

export default PostItem;