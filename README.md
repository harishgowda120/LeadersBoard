# Leaderboard System

A dynamic leaderboard system built with **Node.js**, **Express**, **MongoDB**, and **React.js**. This application allows users to add participants, claim random points, and view real-time rankings.

## Features

- **User Management:** Add new users to the leaderboard.
- **Claim Points:** Award random points (1-10) to users with a single click.
- **Dynamic Leaderboard:** View real-time user rankings based on total points.
- **Claim History:** Automatically stores point claims in a history collection.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```
MONGO_URI=mongodb://localhost:27017/leaderboardDB
```

Start the backend server:
```bash
node server.js
```

### Frontend Setup
```bash
cd leaderboard-frontend
npm install
npm start
```

## Project Structure

```
├── backend
│   ├── models
│   │   ├── User.js
│   │   └── History.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── server.js
│   └── .env
│
├── leaderboard-frontend
│   ├── src
│   │   ├── components
│   │   │   ├── AddUser.js
│   │   │   ├── ClaimPoints.js
│   │   │   └── Leaderboard.js
│   │   └── App.js
│   └── package.json
└── README.md
```

## Usage

1. **Add Users:** Enter a user name and click "Add User."
2. **Claim Points:** Select a user from the dropdown and click "Claim" to award random points.
3. **View Leaderboard:** See the updated rankings instantly.

## License

This project is for educational purposes only.

