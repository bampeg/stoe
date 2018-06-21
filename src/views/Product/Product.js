import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import productStyles from './ProductStyles'


export default function Product(props) {
    const styles = StyleSheet.create(productStyles)

    return (
        <div className={css(styles.productTile)}>
            <p>{props.product.name}</p>
            <p>{props.product.description}</p>
            <p>${props.product.price}</p>
            <p>{props.product.rating} stars</p>
        </div>
    )
}