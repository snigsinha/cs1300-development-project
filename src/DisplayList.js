import React, { Component } from "react";
import { Card, CardActions, CardContent, Button, Typography, Chip} from '@material-ui/core';



class DisplayList extends Component {



  render() {

    return (
        <div>
        {this.props.list.map(item => 
        <Card>
          <CardContent>
          <Typography variant={"h6"} gutterBottom>
          {item.name}
          </Typography>
          <Chip label={"Size: " + item.size} >
          </Chip>
          <Chip label={"Frame Colour: " + item.frame} >
          </Chip>
          <Chip label={"Price: $" + item.price} >
          </Chip>
        </CardContent>
        </Card>)}
        </div> 

        
    );
  }
}

export default DisplayList;