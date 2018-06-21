import React from 'react'
import styles from './ProductStyles'
import injectSheet from 'react-jss'


function Product(props) {
    const { classes, product } = props

    return (
        <div className={classes.productTile} >
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>{product.rating} stars</p>
        </div>
    )
}

export default injectSheet(styles)(Product)