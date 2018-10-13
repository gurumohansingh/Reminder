var express = require('express');
var Router = require('./routes/index');
const reminder=require('./controller/reminder');
var schedule = require('node-schedule');
var app = express();
app.use('/', Router);
module.exports = app;
var job = schedule.scheduleJob({second :20}, function(){
    reminder.getReminder()
  });