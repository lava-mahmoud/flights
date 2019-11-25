import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Header extends Component {
  render() {
    return (
      <div className="bg-dark  container pt-5 pb-2 text-white">
        <h3 className="d-flex justify-content-center mb-5">Flights</h3>
        <div className="nav d-flex justify-content-center">
          <Link to="/">
            <span className="text-white nav-link active">Home</span>
          </Link>
{/*           <Link to="/displayFlight">
            <span className="text-white nav-link">displayFlight</span>
          </Link> */}
          <Link to="/registerFlight">
            <span className="text-white nav-link">registerFlight</span>
          </Link>
          <Link to='/searchFlight'>
          <span className="text-white nav-link">searchFlight</span>

          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
