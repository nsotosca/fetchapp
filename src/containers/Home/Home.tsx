import React, { useEffect, useState } from 'react';

import { getData as getPeople } from '../../core/api';
import { getEspecificObjectKeys, getNumberOfPages, ObjectKeys } from '../../utils/utils';

import PostList from '../../components/PostList';
import PostPagination from '../../components/PostPagination';
import Loader from '../../components/Loader';


const Home = () => {
  const [ people, setPeople ] = useState<ObjectKeys[]>();
  const [ pageCount, setPageCount ] = useState( 0 );
  const [ page, setPage ] = useState( 1 );
  const [ loading, setLoading ] = useState( false );
  const properties = [ 'name', 'birth_year', 'gender', 'homeworld' ];

  useEffect( () =>{
    setLoading( true );
    getPeople( `people/?page=${page}` )
      .then( res => {
        if( !pageCount ){
          const numberOfPages = getNumberOfPages( res.count, res.results.length );
          setPageCount( numberOfPages );
        }
        const newArrayResults = getEspecificObjectKeys( res.results, properties );
        setPeople( newArrayResults );
      } )
      .finally( () => setLoading( false ) );
  }, [page] );

  if( loading )
    return <Loader />;

  return (
    <div>
      {people &&
      <>
        <PostList posts={people} />
        <PostPagination pageCount={pageCount} setPage={setPage}/>
      </>}
    </div>
  );
};

export default Home;
