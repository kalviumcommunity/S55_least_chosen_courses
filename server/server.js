const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const routes = require('./route')

var cors = require('cors')

app.use(cors())

let connectionStatus = 'disconnected';

const startDatabase = async () => {
    try {
        await mongoose.connect (process.env.MongoURI,{
       
        });
        connectionStatus = "Database Connected successfully"
    } catch (err) {
        console.error("Failed to connect to database");
        connectionStatus = "error";
    }
};

app.use('/',routes)

const stopDatabase = async () => {
    await mongoose.disconnect();
    connectionStatus = "closed";
};

app.get('/', (req, res) => {
    res.send(connectionStatus);
});

app.get("/ping", (req, res) => {
    res.send('pong');
});

app.listen(4001, () => {
    startDatabase();
    console.log('Port 4001');
});

module.exports = app;