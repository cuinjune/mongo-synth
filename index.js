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
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true });

// --- connect to your collection ---
const db = require('./models/mongo-synth');

// Handle data in a nice way
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const publicURL = path.resolve(`${__dirname}/public`);
const emscriptenURL = path.resolve(`${publicURL}/emscripten`);
const pdURL = path.resolve(`${emscriptenURL}/pd`);
const nexusuiURL = path.resolve(`${__dirname}/node_modules/nexusui/dist`);

// Set your static server
app.use(express.static(publicURL));
app.use(express.static(emscriptenURL));
app.use(express.static(pdURL));
app.use(express.static(nexusuiURL));

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
        res.json({ error: JSON.stringify(error) });
    }
});

// POST: "/api/v1/synth/data"
app.post("/api/v1/synth/data", async (req, res) => {
    try {
        const newData = {
            preset: req.body.preset,
            knob0: req.body.knob0,
            knob1: req.body.knob1,
            knob2: req.body.knob2,
            knob3: req.body.knob3,
            knob4: req.body.knob4,
            knob5: req.body.knob5,
            knob6: req.body.knob6,
            knob7: req.body.knob7,
            knob8: req.body.knob8,
            knob9: req.body.knob9,
            knob10: req.body.knob10,
            knob11: req.body.knob11,
            knob12: req.body.knob12,
            knob13: req.body.knob13,
            knob14: req.body.knob14,
            knob15: req.body.knob15
        };
        const newElement = await db.create(newData);
        res.json({ "message": "successfully added the element", "data": JSON.stringify(newElement) });
    } catch (error) {
        res.json({ error: JSON.stringify(error) });
    }
});

// PUT: "/api/v1/synth/data/:id"
app.put("/api/v1/synth/data/:id", async (req, res) => {
    try {
        const updatedData = {
            preset: req.body.preset,
            knob0: req.body.knob0,
            knob1: req.body.knob1,
            knob2: req.body.knob2,
            knob3: req.body.knob3,
            knob4: req.body.knob4,
            knob5: req.body.knob5,
            knob6: req.body.knob6,
            knob7: req.body.knob7,
            knob8: req.body.knob8,
            knob9: req.body.knob9,
            knob10: req.body.knob10,
            knob11: req.body.knob11,
            knob12: req.body.knob12,
            knob13: req.body.knob13,
            knob14: req.body.knob14,
            knob15: req.body.knob15
        };
        const updatedElement = await db.findOneAndUpdate({ _id: req.params.id }, updatedData, { new: true });
        res.json({ "message": "successfully updated the element", "data": JSON.stringify(updatedElement) });
    } catch (error) {
        res.json({ error: JSON.stringify(error) });
    }
});

// DELETE: "/api/v1/synth/data/:id"
app.delete('/api/v1/synth/data/:id', async (req, res) => {
    try {
        const deletedElement = await db.findOneAndDelete({ _id: req.params.id });
        res.json({ "message": "successfully deleted the element", "data": JSON.stringify(deletedElement) });
    } catch (error) {
        res.json({ error: JSON.stringify(error) });
    }
});

// Start listening
app.listen(PORT, () => {
    console.log(`see the magic: http://localhost:${PORT}`);
})