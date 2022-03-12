import React from 'react';

type IconProps = {
  classes?:string;
  image: string;
  description?: string;
}

const Icon = ( { classes, image, description }: IconProps ): JSX.Element => {
  return (
    <img src={image} className={classes ? classes : ''} alt={description ? description : ''} />
  );
};

export default Icon;