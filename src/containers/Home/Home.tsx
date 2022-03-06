import React, { useEffect, useState } from 'react';
import PostList from '../../components/PostList';
import { getData as getPeople } from '../../core/api';
import { getEspecificObjectKeys } from '../../utils/utils';

const Home = () => {
  const [ people, setPeople ] = useState();
  const properties = [ 'name', 'birth_year', 'gender', 'homeworld' ];

  useEffect( () =>{
    getPeople( 'people' ).then( res => {
      const newArrayResults = res.results.map( ( result:never ) =>
        getEspecificObjectKeys( result, properties ) );
      setPeople( newArrayResults );
    } );
  }, [] );

  return (
    <div>
      {people && <PostList posts={people} />}
    </div>
  );
};

export default Home;
