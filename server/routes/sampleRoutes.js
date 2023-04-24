const express = require('express');
const router = express.Router();
const User = require("../models/User");

// Get users with income < $5 and car model BMW, Mercedes
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({
            income: { $regex: /^\$\d+(\.\d{1,2})?$/, $lt: '$5' },
            car: { $in: ['BMW', 'Mercedes'] }
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
});

// // Get male users with phone price > 10,000
router.get('/male-users', async (req, res) => {
    try {
        const users = await User.find({
            gender: 'Male',
            $expr: {
                $gt: [{ $toInt: '$phone_price' }, 10000]
            }
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
});

// Get users with last name starting with M, email includes his/her last name, and quote length > 15
router.get('/quote-users', async (req, res) => {
    try {
        const users = await User.find({
            $and: [
                { last_name: { $regex: /^M/ } },
                // { email: { $regex: new RegExp(`^\\w+\\.${last_name}@`, 'i') } },
                { quote: { $exists: true, $gt: 15 } },
            ]
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
});

// // Get users with car model BMW, Mercedes, or Audi and email doesn't contain any digit
router.get('/car-users', async (req, res) => {
    try {
        const users = await User.find({
            car: { $in: ['BMW', 'Mercedes', 'Audi'] },
            email: { $not: /\d/ }
        });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get top 10 cities by number of users and their average income
router.get('/topCities', async (req, res) => {
    try {
        // Group the users by city and calculate the count of users and the average income
        const result = await User.aggregate([
            {
                $group: {
                    _id: '$city',
                    count: { $sum: 1 },
                    total_income: { $sum: { $toDouble: { $substr: ['$income', 1, -1] } } },
                },
            },
            { $addFields: { average_income: { $round: [{ $divide: ['$total_income', '$count'] }, 2] } } },
            { $sort: { count: -1 } },
            { $limit: 10 },
        ]);

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }
});

module.exports = router;
