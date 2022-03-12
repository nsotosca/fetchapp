import React from 'react';

import { PostList, Pagination, Loader } from '../../components';

import useApi from '../../utils/Hooks/useApi';

import './Characters.scss';

const Characters = (): JSX.Element => {
  const properties = [ 'name', 'birth_year', 'gender', 'homeworld' ];
  const url = 'people';
  const { data: characters, pageCount, page, setPage, loading } = useApi( url, properties );

  return (
    <div className='characters-container'>
      {loading
        ? <Loader />
        : <PostList posts={characters} />
      }
      <Pagination pageCount={pageCount} page={page} setPage={setPage}/>
    </div>
  );
};

export default Characters;
