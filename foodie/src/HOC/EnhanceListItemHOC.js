import React, { Component } from "react";
import PropTypes from "prop-types";

// const IronMan = withSuit(TonyStark);

const EnhanceListItemHOC = (PassComponent) => {
  class AddRemoveCart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        qty: 0,
        price: 0
      }
    }

    // addItem = (product) => {
    //   console.log(product.price, product.qty);
    //   // this.setState((state) => ({
    //   //   qty: product.qty + 1,
    //   //   price: product.price * this.state.qty || 0
    //   // }), () => console.log(this.state));

    //   this.setState((state) => ({
    //     qty: product.qty + 1,
    //   }), () => {
    //     this.setState((state) => ({
    //       price: product.price * this.state.qty || 0
    //     }
    //     ))
    //   })
    // }

    addItem = (product, productCount) => {
      console.log(product, productCount, "New count in HOC");
      this.setState((state) => ({
        qty: productCount,
      }), () => {
        this.setState((state) => ({
          price: product.price * productCount || 0
        }
        ))
      })
    }

    deleteItem = (product) => {
      console.log(product.price, product.qty);
      this.setState((state) => ({
        qty: product.qty - 1,
      }), () => {
        this.setState((state) => ({
          price: product.price * this.state.qty || 0
        }
        ))
      })
    }

    //   const increaseItem = (item) => {

    //   // console.log(item);
    //   setCount(count + 1);
    //   setPrice(price + +item.price);
    //   item.qty = item.qty + 1;
    // }

    // const decreaseItem = (item) => {
    //   if (item.qty > 0) {
    //     item.qty = item.qty - 1;
    //     setCount(count - 1);
    //     setPrice(price - +item.price);
    //   }
    // }

    render() {
      return (
        <>
          <PassComponent addItem={(price, qty) => this.addItem(price, qty)} deleteItem={(price, qty) => this.deleteItem(price, qty)} addedItemCount={this.state.qty} addedItemPrice={this.state.price} />
        </>
      )

    }
  }
  return AddRemoveCart
};

EnhanceListItemHOC.propTypes = {};

export default EnhanceListItemHOC;
