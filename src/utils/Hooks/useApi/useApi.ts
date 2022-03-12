import React, { useCallback, useEffect, useState } from 'react';

import { getData } from '../../../core/api';
import { getEspecificObjectKeys, getTotalPages, ObjectKeys } from '../../utils';

type ApiReturn = {
  data: ObjectKeys[];
  pageCount: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
}

const useApi = (  api: string, properties: string[] ): ApiReturn => {
  const [ data, setData ] = useState<ObjectKeys[]>( [] );
  const [ pageCount, setPageCount ] = useState( 0 );
  const [ page, setPage ] = useState( 1 );
  const [ loading, setLoading ] = useState( false );

  const fetchData = useCallback( () => {
    getData( `${api}?page=${page}` )
      .then( res => {
        if( !pageCount ){
          const numberOfPages = getTotalPages( res.count, res.results.length );
          setPageCount( numberOfPages );
        }
        const newArrayResults = getEspecificObjectKeys( res.results, properties );
        setData( newArrayResults );
      } )
      .finally( () => setLoading( false ) );
  }, [page] );

  useEffect( () =>{
    setLoading( true );
    fetchData();
  }, [page] );

  return { data, pageCount, page, setPage, loading };
};

export default useApi;
