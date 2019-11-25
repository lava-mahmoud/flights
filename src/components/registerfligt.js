import React, { Component } from "react";

export class Registerfligt extends Component {
  state = {
    flightNumber: "",
    from: "",
    to: "",
    date: ""
  };
  handleChange = event => {
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };
  validte = () => {
    const { flightNumber, from, to, date } = this.state;
    const isEnabled =
      flightNumber !== "" &&
      from !== "" &&
      to !== "" &&
      date !== "" &&
      from !== to;

    return isEnabled;
  };
  handlClick = event => {
    event.preventDefault();
    if (this.validte()) {
      this.props.addFlight(this.state);
      this.setState({
        flightNumber: "",
        from: "",
        to: "",
        date: ""
      });
      this.forceUpdate();
    }
  };
  render() {
    return (
      <div>
        <label>flight Number</label>

        <input
          name="flightNumber"
          type="text"
          value={this.state.flightNumber}
          onChange={this.handleChange}
        />
        <label>from</label>
        <select
          name="from"
          value={this.state.from}
          onChange={this.handleChange}
        >
          <option value="dusseldorf">dusseldorf</option>
          <option value="krefeld">krefeld</option>
          <option value="essen">essen</option>
          <option value="velbert">velbert</option>
        </select>
        {/*  <input
          name="from"
          type="text"
          value={this.state.from}
          onChange={this.handleChange}
        /> */}

        <label>to</label>
        <select name="to" value={this.state.to} onChange={this.handleChange}>
          <option value="dusseldorf">dusseldorf</option>
          <option value="krefeld">krefeld</option>
          <option value="essen">essen</option>
          <option value="velbert">velbert</option>
        </select>

        {/*         <input
          name="to"
          type="text"
          value={this.state.to}
          onChange={this.handleChange}
        /> */}

        <label>Date</label>

        <input
          name="date"
          type="date"
          value={this.state.date}
          onChange={this.handleChange}
        />

        <button onClick={this.handlClick} disabled={!this.validte()}>
          Register
        </button>
      </div>
    );
  }
}

export default Registerfligt;
