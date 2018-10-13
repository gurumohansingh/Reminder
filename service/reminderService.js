
var Promise = require('promise');
const mySqlService =require('../service/mySqlDb')
"use strict";
class ReminderService {
    getReminder() {
        return new Promise((resolve, reject) => {
            var query=`SELECT * FROM apps_licenses WHERE product_id in (3,4) and  subscription_status !=0 and (reference not like 'PDF%' and reference not like 'BPM%')
            and DATEDIFF(generated + INTERVAL (case when subscription_type =1 then 1 when subscription_type =3 then 2 end) YEAR,CURDATE()) =21`;
            mySqlService.executeQuery(query).then(result => {
                resolve(result);
            })
        })
    }
    updateReminder(req, res, next) {

    }
    sendReminder(req, res, next) {

    }
}
module.exports = new ReminderService;
