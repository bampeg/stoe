import React from 'react';
import injectSheet from 'react-jss';
import StarRatings from 'react-star-ratings';

import styles from './ProductStyles';

function Product(props) {
    const { classes, product } = props;

    return (
        <div className={classes.productTile} onClick={() => alert("hello!")}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <StarRatings
                starDimension="20px"
                starSpacing="2.5px"
                starRatedColor="gold"
                rating={product.rating} />
        </div>
    );
}

export default injectSheet(styles)(Product);