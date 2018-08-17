import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import Product from '../../components/Product/Product';
import { dummyProducts } from '../../redux/reducer';
import styles from './ProductsStyles';

function Products(props) {
    const { classes, dummyProducts } = props;

    let products = 'Loading...';
    if (props.products.length) {
        products = props.products.map(product => (
            <Product key={product.id} product={product} />
        ));
    } else dummyProducts();

    return (
        <div className={classes.container}>
            {products}
        </div>
    );
};
const mapStateToProps = state => state;
export default injectSheet(styles)(connect(mapStateToProps, { dummyProducts })(Products));