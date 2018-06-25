import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { cartProductRemove } from '../actions';

import ProductCartItem from '../components/ProductCartItem';
import Price from '../components/Price';

class Cart extends React.PureComponent {
    getSummaryPrice(): number {
        let sum: number = 0;

        this.props.products.forEach((product) => {
            sum += product.price;
        });
        
        return sum;
    }

    render() {
        return (
            <section className="cart">
                <div className="cart__title">
                    Cart
                </div>
                {this.props.products.length > 0 && 
                    <div className="cart__headers">
                        <div>
                            Image
                        </div>
                        <div>
                            Info
                        </div>
                        <div>
                            Price
                        </div>
                        <div>
                            Added
                        </div>
                        <div>
                            Remove
                        </div>
                    </div>
                }
                <div className="cart__list">
                    {this.props.products.length > 0 ? 
                        this.props.products.map((product, index) => {
                            return (
                                <ProductCartItem key={index} {...product} />
                            );
                        })
                    :
                        <p>There are no items yet...</p>
                    }
                </div>
                {this.props.products.length > 0 &&
                    <div className="cart__footer">
                        <span className="cart__footer-label">
                            Summary
                        </span>
                        <Price price={this.getSummaryPrice()} />
                    </div>
                }
            </section>
        );
    }
};

const mapStateToProps = state => {
    return {
        products: state.cart.list,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: (id: number) => {
            dispatch(cartProductRemove(id))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);