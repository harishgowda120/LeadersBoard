import React, { useState } from 'react';
import axios from 'axios';

function AddUser() {
  const [name, setName] = useState('');

  const handleAddUser = async () => {
    await axios.post('https://leadersboard-qkxl.onrender.com/api/users/add', { name });
    setName('');
    alert('User Added!');
  };

  return (
    <div className="form-container">
      <h3>Add New User</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default AddUser;
