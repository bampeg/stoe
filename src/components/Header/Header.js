import React from 'react';
import injectSheet from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Search from '../Search/Search';
import styles from './HeaderStyles';

function Header(props) {
  const { classes } = props;

  return (
    <header className={classes.container}>
      <div className={classes.top}>
        <section className={classes.stoeyLogo}>
          <p>stoe</p>
        </section>
        <FontAwesomeIcon icon="bars" />
      </div>
      <Search />
    </header>
  );
}
export default injectSheet(styles)(Header);