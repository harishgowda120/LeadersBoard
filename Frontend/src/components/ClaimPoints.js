import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClaimPoints() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/leaderboard')
      .then(res => setUsers(res.data));
  }, []);

  const handleClaim = async () => {
    await axios.post(`http://localhost:5000/api/users/claim/${selectedUser}`);
    alert('Points Claimed!');
  };

  return (
    <div className="form-container">
      <h3>Claim Points</h3>
      <select onChange={(e) => setSelectedUser(e.target.value)}>
        <option>Select User</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
      <button onClick={handleClaim}>Claim</button>
    </div>
  );
}

export default ClaimPoints;
