import React from 'react';

import { useTranslation } from 'react-i18next';

import { Card as MuiCard } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
  const { t } = useTranslation();

  return (
    <MuiCard>
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
          ( <Typography gutterBottom variant="h5" component="div">
            {t( title )}
          </Typography> )
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
