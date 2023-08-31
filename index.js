const express = require('express');
const connectDB = require('./config/db.config');
const app = express()
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const launchServer = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {console.log(`The sserver is running on the port ${PORT}`)});
    }
    catch (error) {
        console.log(error)
    }
}

launchServer();