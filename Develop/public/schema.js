const mongoose = require('mongoose');
const express = require('express');
const app = express();
const mongojs = ('mongojs');
let Schema = mongoose.Schema;
let workoutSchema = new Schema({
    title:  String, 
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });