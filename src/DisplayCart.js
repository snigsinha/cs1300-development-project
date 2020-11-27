import React, { Component } from "react";

import './App.css';


class DisplayCart extends Component {



getTotal = (list) => {
    return list.reduce((a, {price}) => a + price, 0);
    }
  render() {

    return (
      <div>
        {this.props.cart.map(item => 
        <li>{item.name}, {item.size}</li>)}
        <h6>{"Total Price: "+"$"+this.getTotal(this.props.cart)+".00"}</h6>

      </div>
    );
  }
}

export default DisplayCart;