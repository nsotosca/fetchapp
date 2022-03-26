import React from 'react';

import { Card as MuiCard, CardActionArea } from '@mui/material';
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
  cardAction?:() => void;
  actionButton?:() => void;
  actionButtonLabel?: string;
  children?: JSX.Element;
}

const Card = ( props:CardProps ):JSX.Element => {
  const { children, hasImg, imgUrl, altImg, title, actionButton, actionButtonLabel, cardAction } = props;

  return (
    <MuiCard className='card'>
      <CardActionArea onClick={() =>cardAction ? cardAction() : {}} disabled={!cardAction}>
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
      </CardActionArea>
      {actionButton && actionButtonLabel &&
      <CardActions>
        <Button size="small" onClick={() => actionButton()}> {actionButtonLabel}</Button>
      </CardActions>
      }
    </MuiCard>
  );
};

export default Card;
