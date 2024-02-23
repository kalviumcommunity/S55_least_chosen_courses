const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

let connectionStatus = 'disconnected';

const startDatabase = async () => {
    try {
        await mongoose.connect(process.env.MongoURI);
        connectionStatus = "The database is connected successfully ";
    } catch (err) {
        console.error("Failed to connect to database");
        connectionStatus = "error";
    }
};

const stopDatabase = async () => {
    await mongoose.disconnect();
    connectionStatus = "closed";
};

app.get('/', (req, res) => {
    res.send(connectionStatus);
});

app.get("/ping", (req, res) => {
    res.send('Hello');
});

app.listen(3080, () => {
    startDatabase();
    console.log('Port 3080');
});

module.exports = app;