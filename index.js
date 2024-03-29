const express = require('express');
const connectDB = require('./config/db.config');
const TaskRouter = require('./src/routes/tasks.routes');
const errorHandler = require('./src/middleware/errorHandler');
const routeNotFound = require('./src/middleware/routeNotFound');
const app = express()
require('dotenv').config();

// Middleware

app.use(express.json());

// routes
app.use('/api/v1/tasks', TaskRouter);

// Middleware
app.use(routeNotFound);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const launchServer = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => console.log(`The sserver is running on the port ${PORT}`));
    }
    catch (error) {
        console.log(error)
    }
}

launchServer();