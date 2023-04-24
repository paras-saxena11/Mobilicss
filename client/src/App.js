import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [maleUsers, setMaleUsers] = useState([]);
  const [mUsers, setMUsers] = useState([]);
  const [carUsers, setcarUsers] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users');
        const data1 = await res.data;
        setUsers(data1);
        // console.log(res);
      }
      catch (error) {
        console.error(error);
      }
    }

    getUsers();
    const getMaleUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/male-users');
        const data3 = await res.data;
        setMaleUsers(data3);
        // console.log(data3);
      }
      catch (error) {
        console.error(error);
      }
    }
    getMaleUsers();

    const getMusers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/quote-users');
        const data4 = await res.data;
        setMUsers(data4);
        // console.log(data3);
      }
      catch (error) {
        console.error(error);
      }
    }
    getMusers();

    const getcarUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/car-users');
        const data1 = await res.data;
        setcarUsers(data1);
        // console.log(data3);
      }
      catch (error) {
        console.error(error);
      }
    }
    getcarUsers();

    const getTopCities = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/topCities');
        const data2 = await res.data;
        setCities(data2);
        console.log(cities)
      }
      catch (error) {
        console.error(error);
      }
    }
    getTopCities();
  }, []);

  return (
    <>
      <div>
        <h2>Users which have income lower than $5 USD and have car brand "BMW" or "Mercedes".</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Car</th>
              <th>Income</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.car}</td>
                <td>{user.income}</td>
                <td>{user.phone_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Male User which have phone price greater than 10,000</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {maleUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.phone_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {mUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.quote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>
          Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
        </h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Car</th>
            </tr>
          </thead>
          <tbody>
            {carUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.car}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1>Top Cities</h1>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>User Count</th>
            <th>Total Income</th>
            <th>Average Income</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => (
            <tr key={city._id}>
              <td>{city._id}</td>
              <td>{city.count}</td>
              <td>{city.total_income}</td>
              <td>{city.average_income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
