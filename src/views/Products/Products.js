import React from 'react'
import { css, StyleSheet } from 'aphrodite'

import Product from '../Product/Product'
import { connect } from 'react-redux'
import { dummyProducts } from '../../redux/reducer'
import stylesBox from './ProductsStyles'

function products(props) {
    const styles = StyleSheet.create(stylesBox)

    let products = 'Loading...'
    if (props.products.length) {
        products = props.products.map(product => (
            <Product key={product.id} product={product} />
        ))
    } else props.dummyProducts()

    return (
        <div className={css(styles.container)}>
            {products}
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { dummyProducts })(products)