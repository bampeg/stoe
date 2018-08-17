import React from 'react';
import injectSheet from 'react-jss';

import styles from './StuffStyles';

function Stuff(props) {
  const { container } = props.classes;

  return (
    <div className={container}>
      stuff
    </div>
  );
};
export default injectSheet(styles)(Stuff);