// 1. Read in your mongoose library
const mongoose = require('mongoose');
// 2. Get the Schema class from mongoose
const Schema = mongoose.Schema;
// 3. Define the database model schema for your mongo-synth
const synthSchema = new Schema({
    "name": String,
    "message": String
});

// 4. create a new mongodb model called: "mongo-synth"
const db = mongoose.model('mongo-synth', synthSchema)
// 5. make this mongo-synth model available to your app
module.exports = db;