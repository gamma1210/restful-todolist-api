"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    Required: "Kindly enter the name of the task"
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"]
      }
    ],
    default: ["pending"]
  }
});

module.exports = mongoose.model("Tasks", TaskSchema);
