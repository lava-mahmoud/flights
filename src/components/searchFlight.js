import React, { Component } from "react";
import DisplayFlights from "./displayFlights";
export class SearchFlight extends Component {
  state = {
    flightNumber: "",
    from: "",
    to: "",
    date: ""
  };
  filterdArray = {
    fA: []
  };
  handleChange = event => {
    //console.log("name", event.target.name);
    //console.log("value", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSearch = event => {
    event.preventDefault();
    console.log("clicked");
    // if(this.state.form!="")

    const array = this.props.flights.filter(flight => {
      if (this.state.from !== "" && this.state.to !== "") {
        if(this.state.date!=="")  

        {
            if (this.state.from === flight.from && this.state.to === flight.to)
            return flight;}
      } else if (this.state.from !== "") {
        if (this.state.from === flight.from) return flight;
      } else if (this.state.to !== "") {
        if (this.state.to === flight.to) return flight;
      }
    });
    this.filterdArray.fA = array;
    console.log(this.filterdArray.fA);
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <label>from</label>
        <input
          name="from"
          type="text"
          value={this.state.from}
          onChange={this.handleChange}
        />
        <label>to</label>
        <input
          name="to"
          type="text"
          value={this.state.to}
          onChange={this.handleChange}
        />
        <label>Date</label>
        <input
          name="date"
          type="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>sarch</button>
        {/*  */}
        {/*  */}
        <DisplayFlights flights={this.filterdArray.fA} />
      </div>
    );
  }
}

export default SearchFlight;
