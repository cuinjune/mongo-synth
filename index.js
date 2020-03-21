const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');

const PORT = config.PORT;

// ---- Connect to mongodb here ----
// read in mongoose library
const mongoose = require('mongoose');
// read in the URI to our MongoDB Atlas 
const MONGODB_URI = config.MONGODB_URI;
// Use mongoose to connect to our MongoDB Atlas server
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// --- connect to your collection ---
const db = require('./models/mongo-synth');

// Handle data in a nice way
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const publicURL = path.resolve(`${__dirname}/public`);

// Set your static server
app.use(express.static(publicURL));

// Views
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

// ---- ADD YOUR API ENDPOINTS HERE ----
// GET: "/api/v1/synth/data"
app.get("/api/v1/synth/data", async (req, res) => {
    try {
        const data = await db.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
});

// POST: "/api/v1/synth/data"
app.post("/api/v1/synth/data", async (req, res) => {
    try {
        const newData = {
            name: req.body.name,
            message: req.body.message
        }
        const data = await db.create(newData);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.json(error);
    }
});

// DELETE: "/api/v1/synth/data"
app.delete('/api/v1/synth/data', async (req, res) => {
    try {
        const data = await db.find();
        for (let i = 0; i < data.length; ++i)
            await db.findOneAndDelete(data[i].id);
        res.json({ "message": "successfully cleared synth data" });
    } catch (error) {
        res.json({ error: JSON.stringify(error) });
    }
});

// Start listening
app.listen(PORT, () => {
    console.log(`see the magic: http://localhost:${PORT}`);
})