import React, {  } from 'react';
import {
  Header as ShellHeader,
  SkipToContent,
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
      <SkipToContent href="#main-content" className={styles.skipToContent} />

      {navigationStyle && <HeaderNav />}

    </ShellHeader>
  );
};

const DefaultHeaderText = () => (
  <>
    <span></span>
  </>
);

Header.defaultProps = {
  children: <DefaultHeaderText />,
};

export default Header;
