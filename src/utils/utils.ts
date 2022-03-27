export type ObjectKeys = Record<string, string | string[]>;

export const getKeysFromArr = ( arr: ObjectKeys[], properties: string[] ) => {
  return arr.map( ( item: ObjectKeys ) => {
    return Object.fromEntries( Object.entries( item ).filter( ( [key] ) => properties.includes( key )
    ) );
  } );
};

export const getKeysFromObj = ( obj: ObjectKeys, properties: string[] ) => {
  return Object.fromEntries( Object.entries( obj ).filter( ( [key] ) =>
    properties.includes( key ) ) );
};

export const getTotalPages = ( total:number, maxPerPage:number ) => {
  return Math.ceil( Number( total ) / Number( maxPerPage ) );
};

export const isURL = ( value:string ) => {
  // eslint-disable-next-line no-useless-escape
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test( value );
};