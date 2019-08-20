
const SubscriptionDetails = require('../models/subscription-details');
const FeeduploadDetails = require('../models/feeds_upload');
var nodemailer = require('nodemailer');

module.exports.loadfeeds = (req, res) => {
    FeeduploadDetails.find().sort({'_id':-1}).limit(6)
    .then((feed) => {
        return res.send({status : true, feeds : feed })
    }) 
}
module.exports.autherFeed = (req, res) => {
    const payload = req.body;
    if(payload.type=="feeds"){
        let newRecord = new FeeduploadDetails({
            userId: Math.floor(10000000000 + Math.random() * 90000000000),
            auther_name:payload.auther_name,
            feed:payload.feed
            
        })
        newRecord.save()
        .then((update)=>{
            FeeduploadDetails.find().sort({'_id':-1}).limit(6)
            .then((feed) => {
                return res.send({status : true, feeds : feed })
            })
            SubscriptionDetails.find({
                status: process.env.status 
            })
            .then((subscribersData)=>{
                const emails = subscribersData.map((subscriber)=>subscriber.email)
                if(subscribersData[0].status=="Approved"){
                    var mailData = {
                        auther:payload.auther_name,
                        feed:payload.feed,
                        email:emails
                    };
                    return subscriptonUser(mailData)
                }
            })
        })
    }
}
module.exports.subscription = (req, res) => {
    const payload = req.body;
    if(payload.type =="subscribe"){
        let newRecord = new SubscriptionDetails({
            userId: Math.floor(10000000000 + Math.random() * 90000000000),
            status: process.env.status,
            email:payload.email
        })
        return newRecord.save()
        
        .then((subscriberResponse)=>{
            if(!!subscriberResponse){
                return res.send({status : true })
            } else{
                return res.send({status : false })
            }
        })
    }
    
}
function subscriptonUser(mailData) {
    var transporter = nodemailer.createTransport({
        service: process.env.mailService,
        auth: {
            user: process.env.adminMail_Id,
            pass: process.env.adminMail_Pass
        }
    });
    var mailOptions = {
        from: process.env.adminMail_Id,
        to: mailData.email,
        subject: 'Auther From RSS Feeds'+' '+ mailData.auther,
        text: mailData.feed
    };
      
      
      
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).json({
                status: true,
            });
        }
    });
}






