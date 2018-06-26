import { combineReducers } from 'redux';

import topSellingProducts from './topSellingProducts';
import products from './products';
import product from './product';
import cart from './cart';
import cartPopup from './cart-popup';
import notification from './notification';
import lastViewedProducts from './lastViewedProducts';

const combinedStore = combineReducers({
    topSellingProducts,
    products,
    product,
    cart,
    cartPopup,
    notification,
    lastViewedProducts,
});

export default combinedStore;