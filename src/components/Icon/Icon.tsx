import React from 'react';

type IconProps = {
  classes?:string;
  image: string;
  alt?: string;
}

const Icon = ( { classes, image, alt }: IconProps ): JSX.Element => {
  return (
    <img src={image} className={classes ? classes : ''} alt={alt ? alt : ''} />
  );
};

export default Icon;