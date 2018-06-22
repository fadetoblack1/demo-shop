const products = (state = { isLoading: false, list: [], page: 1, isRequestedBefore: false}, action) => {
    switch (action.type) {
        case 'PRODUCT_LIST_REQUESTED':
            return {
                isLoading: true,
                list: state.list,
                page: state.page,
                isRequestedBefore: state.isRequestedBefore,
            };
        
        case 'PRODUCT_LIST_FETCHED_SUCCESSFULLY':
            console.log(state.page + 1);
            return {
                isLoading: false,
                list: [
                    ...state.list,
                    ...action.payload,
                ],
                page: state.page + 1,
                isRequestedBefore: true,
            };

        case 'PRODUCT_LIST_FETCH_FAILED':
            return {
                isLoading: false,
                list: state.list,
                page: state.page,
                isRequestedBefore: state.isRequestedBefore,
            };

        default:
            return state;
    }
};

export default products;