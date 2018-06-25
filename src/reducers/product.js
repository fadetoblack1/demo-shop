import {
    PRODUCT_REQUESTED,
    PRODUCT_FETCHED_SUCCESSFULLY,
} from '../constants';

const product = (state = { 
    isLoading: false, 
    product: {
        id: null,
        name: null,
        img: null,
        description: null,
        price: null,
    }
}, action) => {
    switch (action.type) {
        case PRODUCT_REQUESTED:
            return {
                isLoading: true,
                product: state.product
            };

        case PRODUCT_FETCHED_SUCCESSFULLY:
            return {
                isLoading: false,
                product: {
                    id: action.payload.id,
                    description: action.payload.description,
                    img: action.payload.image_link,
                    name: action.payload.name,
                    price: action.payload.price,
                    shortDescription: action.payload.short_description,
                },
            };

        case 'PRODUCT_FETCH_FAILED':
            return {
                isLoading: false,
                product: state.product,
            };

        default:
            return state;
    }
};

export default product;