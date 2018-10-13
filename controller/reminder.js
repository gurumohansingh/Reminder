var express = require('express');
var Promise = require('promise');
const mySqlService=require('../service/mySqlDb');
const reminderService=require('../service/reminderService');
const MailService =require('../service/sendMail');
"use strict";
class Reminder
{
    getReminder(req, res, next){
        return new Promise((resolve, reject)=>{
            reminderService.getReminder().then(result=>{
                MailService.send(result);
                res.json(result)
                resolve()
            })
        })
    }   
}
module.exports = new Reminder;