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
  console.log("click");

  this.setState({ 
    cart: this.state.cart.concat([{name: curr_name, price: curr_price}])
  })
  
 
}




  render() {

    return (
      
        <div>
          <div className="col">
        {this.props.list.map(item => 
        <Card style = {{margin-bottom: 10}}>
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
          <Chip label={"Size: " + item.size} >
          </Chip>
          <Chip label={"Frame Colour: " + item.frame} >
          </Chip>
          <Chip label={"$" + item.price + ".00"} >
          </Chip>
          </div>

          <IconButton aria-label="Add to Cart" onClick={this.addToCart.bind(this,item.name, item.price)} >
          
          <AddShoppingCartIcon  />
          <Typography variant="button" gutterBottom>
          Add to Cart
          </Typography>
        </IconButton>
        
        </CardContent>
        </Card>)}
        </div>
          <div className="col">
        <DisplayCart cart={this.state.cart}></DisplayCart>
        </div>
     
        </div>
        
        

        
    );
  }
}

export default DisplayList;