import React from 'react';

import { useTranslation } from 'react-i18next';
import { useApi } from '../../utils/Hooks';

import { PostList, Pagination, Loader } from '../../components';

import './Characters.scss';

const Characters = (): JSX.Element => {
  const properties = [ 'name', 'birth_year', 'gender', 'homeworld' ];
  const url = 'people';
  const { data: characters, pageCount, page, setPage, loading } = useApi( url, properties, true );
  const { t } = useTranslation();

  return (
    <div className='characters'>
      <h2 className='characters-title'>{t( 'characters.title' )}</h2>
      {loading
        ? <Loader />
        : <>
          <Pagination pageCount={pageCount} page={page} setPage={setPage} classes={'characters-pagination-item'}/>
          <PostList posts={characters} />
          {characters.length > 8 && <Pagination pageCount={pageCount} page={page} setPage={setPage} classes={'characters-pagination-item'}/>}
        </>
      }

    </div>
  );
};

export default Characters;
