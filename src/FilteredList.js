import React, { Component } from "react";
import { DropdownButton, Dropdown} from "react-bootstrap";
import DisplayList from "./DisplayList";


class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = { //initial states
      size: "All",
    };
  }

  onSelectFilterSize = (event) => {
    this.setState({size: event});
  }

  matchesFilterSize = item => {
	// all items should be shown when no filter is selected
	if(this.state.size === "All") { 
		return true
	} else if (this.state.size === item.size) {
		return true
	} else {
		return false
	}
}


  

  render() {

    return (
      <div>
        {/* renders the dropdowns for the list */}
        <div>

          <div class="col">
            <h3>Filter by Size</h3>
            <DropdownButton id = "dropdown" title={this.state.size}>
              <Dropdown.Item id="dropdown-option" eventKey="Full Length" onSelect={this.onSelectFilterSize}>Full Length</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="Medium" onSelect={this.onSelectFilterSize}>Medium</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="Small" onSelect={this.onSelectFilterSize}>Small</Dropdown.Item>
              <Dropdown.Item id="dropdown-option" eventKey="All" onSelect={this.onSelectFilterSize}>All</Dropdown.Item>
            </DropdownButton>
          </div>

          <DisplayList list={this.props.items.filter(this.matchesFilterSize)}/>
          
        </div>


      </div>
    );
  }
}

export default FilteredList;