import React from 'react';
import { connect } from 'react-redux';

import {
    getCartPopupShonwState,
    getCartPopupProduct,
} from '../selectors';

class CartPopup extends React.PureComponent {
    render() {
        const isShown = this.props.isShown;
        const { name, img } = this.props.product;
    
        console.log(isShown, name, img);    
        return (
            <div className={isShown ? 'cart-popup cart-popup--visible' : 'cart-popup'}>
                <div className="cart-popup__label">
                    You added
                </div>
                <div className="cart-popup__product">
                    <div className="cart-popup__product-title">
                        {name}
                    </div>
                    <img className="cart-popup__product-img" src={img} alt={name} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isShown: getCartPopupShonwState(state),
        product: getCartPopupProduct(state),
    }
};

export default connect(mapStateToProps, null)(CartPopup);