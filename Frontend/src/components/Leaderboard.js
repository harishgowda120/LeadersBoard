import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/users/leaderboard');
      setLeaderboard(res.data);
    };
    fetchData();
  }, []);

  const tableStyle = {
    width: '80%',
    marginTop: '20px',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px',
    fontSize: '18px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '12px 20px',
    textAlign: 'center',
    border: '1px solid #ddd',
    fontSize: '16px',
  };

  const trStyle = {
    backgroundColor: '#f9f9f9',
  };

  const trHoverStyle = {
    backgroundColor: '#f1f1f1',
  };

  return (
    <div className="leaderboard-container" style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h3 style={{ fontSize: '28px', marginBottom: '20px', color: '#333', fontWeight: 'bold' }}>Leaderboard</h3>
      <table style={tableStyle}>
        <thead>
          <tr style={trStyle}>
            <th style={thStyle}>Rank</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={user._id} style={index % 2 === 0 ? trStyle : trHoverStyle}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
