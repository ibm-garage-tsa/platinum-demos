import React, {  } from 'react';
import {
  Header as ShellHeader,
} from 'carbon-components-react';
import cx from 'classnames';

import HeaderNav from 'gatsby-theme-carbon/src/components/HeaderNav/HeaderNav';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';

import styles from 'gatsby-theme-carbon/src/components/Header/Header.module.scss';

const Header = ({ children }) => {

  const { navigationStyle } = useMetadata();

  return (
    <ShellHeader
      aria-label="Header"
      className={cx(styles.header, {
        [styles.headerWithHeaderNav]: navigationStyle,
      })}
    >

      {navigationStyle && <HeaderNav />}

    </ShellHeader>
  );
};

export default Header;
