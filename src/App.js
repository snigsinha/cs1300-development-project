import React, { Component } from "react";
import './App.css';
import FilteredList from './FilteredList';

var productList = [
  {id: 1, name: "Full Length Black Frame Mirror", size: "Full Length", frame: "Black", price: 100},
  {id: 2, name: "Full Length Wood Frame Mirror", size: "Full Length", frame: "Wood", price: 110},
  {id: 3, name: "Full Length Gold Frame Mirror", size: "Full Length", frame: "Gold", price: 150},
  {id: 4, name: "Full Length White Frame Standing Mirror", size: "Full Length", frame: "White", price: 120},
  {id: 5, name: "Medium Gold Frame Circular Mirror", size: "Medium", frame: "Gold", price: 80},
  {id: 6, name: "Medium Geomertic Gold Frame Mirror", size: "Medium", frame: "Gold", price: 90},
  {id: 7, name: "Medium Black Frame Oval Shaped Mirror", size: "Medium", frame: "Black", price: 60},
  {id: 8, name: "Medium Gold Frame Circular Hanging Mirror", size: "Medium", frame: "Gold", price: 85},
  {id: 9, name: "Medium Gold Frame Abstract Mirror", size: "Medium", frame: "Gold", price: 70},
  {id: 10, name: "Small Engraved Gold Frame Mirror", size: "Small", frame: "Gold", price: 75},
  {id: 11, name: "Small Ventian Gold Frame Mirror", size: "Small", frame: "Gold", price: 95},
  {id: 12, name: "Small Wood Frame Mirror", size: "Small", frame: "Wood", price: 40},
]

class App extends Component {
  render() {
    return (
      <div class="title_container">

        <div class="title_row">
          {/*creates the heading for the page*/}
          <h1>The Vanity Store</h1>
          
        </div>
        <div class="title_row">
        <h2>Your one-stop shop for Mirrors!</h2>
        </div>

        <FilteredList items = {productList} />

      </div>
    );
  }
}

export default App;
