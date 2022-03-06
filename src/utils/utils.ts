type ObjectKeys = Record<string, string | number | boolean>;

export const getEspecificObjectKeys = ( arr:ObjectKeys, properties:string[] ) => {
  const newItem: ObjectKeys = {};
  Object.keys( arr ).map( ( key ) =>
    properties.includes( key ) ? newItem[key] = arr[key] : ''
  );
  return newItem;
};