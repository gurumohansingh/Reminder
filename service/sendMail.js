
const nodemailer = require('nodemailer');
'use strict';

class SendMail {
    send(mailData) {
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, 
                auth: {
                    user: '', //TODODO put your gmail id
                    pass: '' // TODODO gmail password password
                },
                tls:{
                    rejectUnauthorized:false
                  }
            });
            mailData.map(data=>{
            let mailOptions = {
                from: '', //TODODO put your gmail id same which is passing in user
                to: data.email,
                subject: 'Friendly Reminder for licence', 
                html: '<b>Hello world?</b>'
            };            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);                
            });
        })
    }

}
module.exports = new SendMail; 