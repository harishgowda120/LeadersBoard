import React from 'react';
import AddUser from './components/AddUser';
import ClaimPoints from './components/ClaimPoints';
import Leaderboard from './components/Leaderboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Leaderboard System</h1>
      <AddUser />
      <ClaimPoints />
      <Leaderboard />
    </div>
  );
}

export default App;
