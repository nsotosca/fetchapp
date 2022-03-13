import React from 'react';

import { Card as MuiCard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { Text as Title } from '../../components';

import './Card.scss';

type CardProps = {
  title?: string;
  hasImg?: boolean;
  imgUrl?: string;
  altImg?: string;
  leftAction?: () => void;
  children: JSX.Element;
}

const Card = ( props:CardProps ):JSX.Element => {
  const { children, hasImg, imgUrl, altImg, title, leftAction } = props;

  return (
    <MuiCard className='card'>
      {hasImg &&
        ( <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt={altImg}
        /> )
      }
      <CardContent>
        {title &&
          ( <Title headingLevel='h3' classes='card-title'>
            {title}
          </Title> )
        }
        {children}
      </CardContent>
      {leftAction &&
      <CardActions>
        <Button size="small" onClick={() => leftAction}> Share</Button>
      </CardActions>
      }
    </MuiCard>
  );
};

export default Card;
