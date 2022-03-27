import { useCallback, useEffect, useState } from 'react';

import  ResultsDTO, { ResultDTO } from '../../../DTOs/ApiDTO';

type UseApiReturn = {
  response:  ResultsDTO | ResultDTO;
  loading: boolean;
}

const useApi = (
  getData:( arg?:string ) => Promise< ResultsDTO | ResultDTO>,
  arg?: string ): UseApiReturn => {
  const [ response, setResponse ] = useState<ResultsDTO | ResultDTO>( {
    count    : 0,
    next     : '',
    previous : '',
    results  : []
  } );
  const [ loading, setLoading ] = useState( false );

  const fetchData = useCallback( () => {
    getData( arg ? arg : undefined )
      .then( res => setResponse( res ) )
      .finally( () => setLoading( false ) );
  }, [arg] );

  useEffect( () =>{
    setLoading( true );
    fetchData();
  }, [arg] );

  return { response, loading };
};

export default useApi;
