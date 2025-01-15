const express = require('express');
const router = express.Router();
const User = require('../models/User');
const History = require('../models/History');

// Add new user
router.post('/add', async (req, res) => {
    const { name } = req.body;
    try {
        const user = new User({ name });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Claim random points
router.post('/claim/:id', async (req, res) => {
    const { id } = req.params;
    const points = Math.floor(Math.random() * 10) + 1;

    try {
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ error: "User not found" });

        user.points += points;
        await user.save();

        const history = new History({ userId: id, pointsClaimed: points });
        await history.save();

        res.json({ user, points });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
    try {
        const leaderboard = await User.find().sort({ points: -1 });
        res.json(leaderboard);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
