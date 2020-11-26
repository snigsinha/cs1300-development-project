import React, { Component } from "react";
import { Card, CardActions, CardContent, Button, Typography, Chip, CardMedia} from '@material-ui/core';



class DisplayList extends Component {



  render() {

    return (
        <div>
        {this.props.list.map(item => 
        <Card>
          <CardContent>
          <CardMedia
          style = {{ height: 0}}
        image={"images/"+ item.name +".jpg"}
        title={item.name}
      >
      </CardMedia>
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