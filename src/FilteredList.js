import React, { Component } from "react";
import { DropdownButton, Dropdown} from "react-bootstrap";
import DisplayList from "./DisplayList";
import './App.css';


class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = { //initial states
      size: "All",
      frame: "All",
      sort_price: "None"
    };
  }

  onSelectFilterSize = (event) => {
    this.setState({size: event});
  }

  onSelectFilterFrame = (event) => {
    this.setState({frame: event});
  }

  onSelectSortPrice = (event) => {
    this.setState({sort_price: event});
  }

  matchesFilterSize = item => {
	// all items should be shown when no filter is selected
	if(this.state.size === "All") { 
		return true;
	} else if (this.state.size === item.size) {
		return true;
	} else {
		return false;
	}
  }

  matchesFilterFrame = item => {
    // all items should be shown when no filter is selected
    if(this.state.frame === "All") { 
      return true;
    } else if (this.state.frame === item.frame) {
      return true;
    } else {
      return false;
    }
    }



  sortPriceFunction = (a,b) => {
    if(this.state.sort_price === "None") { 
      return 0;
    } else if (this.state.sort_price === "Price Low to High") {
      return a.price-b.price;
    } else {
      return b.price-a.price;
    }

  }

  

  render() {

    return (
      <div>
        {/* renders the dropdowns for the list */}
        <div>

          <div className="title_row">
            <div className="filter">
            <h4>Filter by Size :</h4>
            <DropdownButton id = "dropdown" title={this.state.size}>
              <Dropdown.Item id="dropdown-option" eventKey="Full Length" onSelect={this.onSelectFilterSize}>Full Length</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="Medium" onSelect={this.onSelectFilterSize}>Medium</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="Small" onSelect={this.onSelectFilterSize}>Small</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="All" onSelect={this.onSelectFilterSize}>All</Dropdown.Item>
            </DropdownButton>
            </div>

            <div className="filter">
            <h4>Filter by Frame :</h4>
            <DropdownButton id = "dropdown" title={this.state.frame}>
              <Dropdown.Item id="dropdown-option" eventKey="Black" onSelect={this.onSelectFilterFrame}>Black</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="Wood" onSelect={this.onSelectFilterFrame}>Wood</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="Gold" onSelect={this.onSelectFilterFrame}>Gold</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="White" onSelect={this.onSelectFilterFrame}>White</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="All" onSelect={this.onSelectFilterFrame}>All</Dropdown.Item>
            </DropdownButton>
            </div>

            <div className="filter">
            <h4>Sort By :</h4>
            <DropdownButton id = "dropdown" title={this.state.frame}>
              <Dropdown.Item id="dropdown-option" eventKey="Price Low to High" onSelect={this.onSelectSortPrice}>Price Low to High</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="Price High to Low" onSelect={this.onSelectSortPrice}>Price High to Low</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="None" onSelect={this.onSelectSortPrice}>None</Dropdown.Item>
            </DropdownButton>

            </div>

          </div >

          <div className="items_container">
          <DisplayList list={this.props.items.filter(this.matchesFilterSize).filter(this.matchesFilterFrame).sort(this.sortPriceFunction)}/>
          </div>
        </div>


      </div>
    );
  }
}

export default FilteredList;