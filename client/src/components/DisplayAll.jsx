import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodayDate from './TodayDate';

const DisplayAll = (props) => {
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/person')
      .then((response) => setPersonList(response.data))
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <h1>
          The Great Finance Tracker: </h1>
            <Link to={`/api/person`}> New</Link>
        
      </div>
      <div className="container1">
        <div className="navbar">
          <div className="text-left">
            <h1>
              <TodayDate />
            </h1>
          </div>
        </div>
      </div>
      <div className="container2">
        {personList.length > 0 && (
          <div className="table-container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>First Name:</th>
                  <th>Last Name: </th>
                  <th>Date: </th>
                  <th>Price (in dollars): </th>
                  <th>Description: </th>
                  <th>Name Of Place: </th>
                </tr>
              </thead>
              <tbody>
                {personList.map((person, index) => {
                  const date = person.date ? new Date(person.date) : null;
                  const formattedDate = date
  ? date.toLocaleDateString('en-US', { timeZone: "UTC" })
  : 'No Date Entered';
                  return (
                    <tr key={index}>
                      <td>
                        <Link to={`/api/person/${person._id}`}>
                          {person.firstName}
                        </Link>
                      </td>
                      <td>{person.lastName}</td>
                      <td>{formattedDate}</td>
                      <td>{person.price}</td>
                      <td>{person.description}</td>
                      <td>{person.nameOfPlace}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="total-spending">
              Total Spending: $
              {personList
                .reduce((sum, person) => sum + person.price, 0)
                .toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayAll;