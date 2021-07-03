import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../redux/actions/cartActions';

export class CartSummary extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        );
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map((cartItem) => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge
                                color="danger"
                                onClick={() =>
                                    this.props.actions.removeFromCart(
                                        cartItem.product
                                    )
                                }
                            >
                                X
                            </Badge>
                            {cartItem.product.productName}
                            <Badge color="success">{cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem>Cart Details</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0
                    ? this.renderSummary()
                    : this.renderEmpty()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cartReducer,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        removeFromCart: bindActionCreators(
            cartActions.removeFromCart,
            dispatch
        ),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
