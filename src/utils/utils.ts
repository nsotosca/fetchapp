export type ObjectKeys = Record<string, string | number | boolean>;

export const getEspecificObjectKeys = ( arr:ObjectKeys[], properties:string[] ) => {
  return arr.map( ( obj:ObjectKeys ) => {
    const newObj: ObjectKeys = {};
    Object.keys( obj ).map( ( key ) =>
      properties.includes( key ) ? newObj[key] = obj[key] : ''
    );
    return newObj;
  } );
};

export const getNumberOfPages = ( total:number, maxPerPage:number ) => {
  return Math.ceil( Number( total ) / Number( maxPerPage ) );
};