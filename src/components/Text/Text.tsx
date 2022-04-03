import React from 'react';

import { useTranslation } from 'react-i18next';

import './Text.scss';

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextProps = {
  children: string;
  /**
   * H1 | h2 | h3 | h4 | h5 | h6
   * default p
   */
  headingLevel?: HeadingLevels;
  classes?: string;
}

const Text = ( props:TextProps ):JSX.Element => {
  const { children, headingLevel, classes } = props;
  const { t } = useTranslation();

  const Tag: keyof JSX.IntrinsicElements = headingLevel ?  headingLevel : 'p';

  return ( <Tag className={classes ? classes : `text-${Tag}`}>{ t( children ) }</Tag> );
};

export default Text;
