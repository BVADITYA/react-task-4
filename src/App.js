import React, { useState, useEffect } from 'react';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const tableStyle = {
    width: '80%',
    margin: '0 auto',
    background: '#191919',
    color: 'white',
    textAlign: 'center',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    backgroundColor: '#191919',
    color: 'white',
    borderBottom: '1px solid white',
  };

  const dummyDataStyle = {
    textAlign: 'center', // Center align the text
    marginTop: '20px',   // Add some top margin for spacing
  };

  return (
    <div>
      <div style={dummyDataStyle}>
        <h2 style={{ color: '#191919' }}>Dummy Data</h2>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Serial No</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
