import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SearchStyles';

function Search(props) {

  const { classes } = props;
  
  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search" />
      <button><FontAwesomeIcon icon="search" /></button>
    </div>
  );
}

const mapStateToProps = state => state;

export default injectSheet(styles)(connect(mapStateToProps)(Search));