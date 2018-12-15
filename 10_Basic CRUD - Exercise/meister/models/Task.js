const mongoose = require('mongoose')

const Schema = mongoose.Schema
const taskSchema = new Schema({
  title: { type: mongoose.Schema.Types.String, required: true },
  age: mongoose.Schema.Types.Number,
  grades: Array,
})
