// 1. Read in your mongoose library
const mongoose = require('mongoose');
// 2. Get the Schema class from mongoose
const Schema = mongoose.Schema;
// 3. Define the database model schema for your mongo-synth
const synthSchema = new Schema({
    "preset": String,
    "knob0" : Number,
    "knob1" : Number,
    "knob2" : Number,
    "knob3" : Number,
    "knob4" : Number,
    "knob5" : Number,
    "knob6" : Number,
    "knob7" : Number,
    "knob8" : Number,
    "knob9" : Number,
    "knob10" : Number,
    "knob11" : Number,
    "knob12" : Number,
    "knob13" : Number,
    "knob14" : Number,
    "knob15" : Number
});
// 4. create a new mongodb model called: "mongo-synth"
const db = mongoose.model('mongo-synth', synthSchema)
// 5. make this mongo-synth model available to your app
module.exports = db;