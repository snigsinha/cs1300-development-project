import React, { Component } from "react";



class DisplayList extends Component {



  render() {

    return (
        <div>
        {this.props.list.map(item => 
        <li>{item.name}, {item.size}</li>)}
        </div>

        
    );
  }
}

export default DisplayList;