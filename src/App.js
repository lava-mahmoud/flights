import logo from "./logo.svg";
import Registerfligt from "./components/registerfligt"
import DisplayFlights from "./components/displayFlights"
import Header from "./components/header"
import SearchFlight from "./components/searchFlight"
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";




import React, { Component } from 'react'

export class App extends Component {
  state={
    flights:[{  
      flightNumber: "L12",
       from: "dusseldorf",
       to: "essen",
       date: "2019-10-22"},
       {  
        flightNumber: "L39",
         from: "krefeld",
         to: "velbert",
         date: "2019-12-01"},
         {  
          flightNumber: "L27",
           from: "dusseldorf",
           to: "krefeld",
           date: "2019-11-23"},
           {  
            flightNumber: "L30",
             from: "essen",
             to: "krefeld",
             date: "2019-10-25"}]
  }
  addFlight=(flight)=>{
    var newState=this.state.flights.push(flight);
    this.setState({newState})
    console.log(this.state.flights);
  }
  render() {
    return (

      <Router>
     
        <Header />
        <Route path="/" exact Component= {<DisplayFlights flights={this.state.flights}/>}/>
 {/*        <Route
            path="/" 

            exact
            render={props => (
              <React.Fragment>
             
                <div className="table mt-5 container">
                  
                <DisplayFlights flights={this.state.flights}/>
                </div>

              </React.Fragment>
            )}
          /> */}
        <Route
            path="/registerFlight" 
            exact
            render={props => (
              <React.Fragment>
                <div className="table mt-5 container">
                <Registerfligt addFlight={this.addFlight}/>
                </div>
                <div className="table mt-5 container">
                  
                <DisplayFlights flights={this.state.flights}/>
                </div>

              </React.Fragment>
            )}
          />
{/*             <Route
            path="/displayFlight"
            exact
            render={props => (
              <React.Fragment>
               <div className="table mt-5 container">
                <Registerfligt addFlight={this.addFlight}/>
                </div>

                
              </React.Fragment>
            )}
          /> */}
          <Route path='/searchFlight' exact render ={props=>(
            <React.Fragment>


                  <div className="table mt-5 container">
                  
                  <SearchFlight flights={this.state.flights}/>
                  </div>

            </React.Fragment>

          )} />


    </Router>

    )
  }
}

export default App
