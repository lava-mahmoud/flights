import React from "react";

export default function DisplayFlights(props) {
  var isClicked = false;
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>FlightNumber</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.flights.map((flight, index) => (
            <tr key={index}>
              <td>
                <input
                  name="flightNumber"
                  value={flight.flightNumber}
                />
              </td>
              <td>
                <input name="from" value={flight.from} />
              </td>
              <td>
                <input name="to" value={flight.to}/>
              </td>
              <td>
                <input name="date" value={flight.date} />
              </td>
              <td>
                <button
                  onClick={() => {
                    isClicked = true;
                    console.log(isClicked);
                  }}
                >
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
