// @flow

import {
    PRODUCT_ADDED_TO_CART,
    PRODUCT_REMOVED_FROM_CART,
    CART_CLEAR,
} from '../constants';

import type {
    CartStateType,
    ProductCartType,
} from '../types';

const cart = (state: CartStateType = { isLoading: false, list: []}, action: Object) => {
    switch (action.type) {
        case PRODUCT_ADDED_TO_CART:
            return {
                isLoading: false,
                list: [
                    {
                        ...action.payload,
                        added: new Date(),
                    },
                    ...state.list,
                ],
            };

        case PRODUCT_REMOVED_FROM_CART:
            const newList: Array<ProductCartType> = state.list.filter((product) => {
                return !(product.id === action.payload.id && product.added === action.payload.dateAdded);
            });
        
            return {
                isLoading: false,
                list: newList,
            };

        case CART_CLEAR:
            return {
                isLoading: false,
                list: []
            };

        default:
            return state;
    }
};

export default cart;