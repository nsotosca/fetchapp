import React from 'react';

import { useTranslation } from 'react-i18next';

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TextProps = {
  children: string;
  /**
   * H1 | h2 | h3 | h4 | h5 | h6
   * default p
   */
  headingLevel: HeadingLevels;
  classes: string;
}

const Text = ( props:TextProps ):JSX.Element => {
  const { children, headingLevel, classes } = props;
  const { t } = useTranslation();

  const validHeadingLevels = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];

  const Tag: keyof JSX.IntrinsicElements = validHeadingLevels.includes( headingLevel ) ? headingLevel : 'p';

  return ( <Tag className={classes}>{ t( children ) }</Tag> );
};

export default Text;
