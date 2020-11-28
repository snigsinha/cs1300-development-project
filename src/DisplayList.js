import React, { Component } from "react";
import { Card, CardContent, Typography, Chip, CardMedia, IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DisplayCart from './DisplayCart';




class DisplayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cart: [],
        
    };
}

addToCart = (curr_name, curr_price) => {

  this.setState({ 
    cart: this.state.cart.concat([{name: curr_name, price: curr_price}])
  })
  
 
}

removeFromCart = (item_name, item_price) => {


  let removed_element = {name: item_name, price: item_price};

  const index = this.state.cart.indexOf(removed_element);
  this.state.cart.splice(index, 1);




  this.setState({ 
    cart: this.state.cart
  })



  
}


  render() {

    return (
      
        <div>
          
          
          <div className="container">
        {this.props.list.map(item => 

       
        <Card className="card">
          <CardContent>
          <CardMedia
          style = {{ height: 200, width:200}}
        image={"images/"+ item.name +".jpg"}
        title={item.name}
      >
      </CardMedia>
          <Typography variant={"p"} gutterBottom>
          {item.name}
          </Typography>
          <div className="button">
          <Chip className="chip" label={"Size: " + item.size} >
          </Chip>
          <Chip className="chip" label={"Frame Colour: " + item.frame} >
          </Chip>
          <Chip className="chip" label={"$" + item.price + ".00"} >
          </Chip>
          </div>

          <IconButton aria-label="Add to Cart" onClick={this.addToCart.bind(this,item.name, item.price)} >
          
          <AddShoppingCartIcon  />
          <Typography variant="button" gutterBottom>
          Add to Cart
          </Typography>
        </IconButton>
        
        </CardContent>
        </Card>
        
    
        )}

<div className="col">
        <DisplayCart cart={this.state.cart} removeFunction={this.removeFromCart}></DisplayCart>
        </div>

        </div>

          
     
        </div>
        
        

        
    );
  }
}

export default DisplayList;