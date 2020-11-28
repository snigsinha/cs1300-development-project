import React, { Component } from "react";
import { Button} from '@material-ui/core';
import './App.css';


class DisplayCart extends Component {



getTotal = (list) => {
    return list.reduce((a, {price}) => a + price, 0);
    }


  render() {

    return (
      <div className="cart">
        <h2> <u> Cart</u></h2>
        {this.props.cart.map(item => 
        <li className="margin">{item.name}, {"$"+item.price+".00"} <Button size="small" variant="contained" className="remove_button"
         onClick={this.props.removeFunction.bind(this,item.name, item.price)}>Remove</Button></li>
        
        )}
        <h6 style={{textAlign:"right"}}>{"Total Price: "+"$"+this.getTotal(this.props.cart)+".00"}</h6>

      </div>
    );
  }
}

export default DisplayCart;