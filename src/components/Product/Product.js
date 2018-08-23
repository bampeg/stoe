import React from 'react';
import injectSheet from 'react-jss';

import styles from './ProductStyles';

function Product(props) {
    const { classes, product } = props;

    return (
        <div className={classes.productTile} onClick={() => alert("hello!")}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{product.rating} stars</p>
        </div>
    );
}

export default injectSheet(styles)(Product);