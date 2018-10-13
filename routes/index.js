var express = require('express');
var router = express.Router();
var Reminder=require('../controller/reminder');
/* GET home page. */
router.get('/reminder', Reminder.getReminder);
module.exports = router;
