const newEnrollementDetails = require('../models/newEnrollement');
module.exports.searchEnrollement = (req, res) => {
    const payload = req.body;
    console.log("search enrollemrnt payload",payload)
    
    if(payload.searchBy=="Account Name"){
        console.log("Account Name")
        newEnrollementDetails.find({
            firstName:payload.account_firstName,
            lastName:payload.account_lastName 
        })
        .then((enrollementDetails)=>{
            console.log("<<<<<<<Details>>>>>>>>>>>",enrollementDetails)
            if(enrollementDetails!=""){
                if(enrollementDetails[0].firstName==payload.account_firstName && enrollementDetails[0].lastName==payload.account_lastName){
                    return res.send({status : true,enrollementDetails})
                }  
            } else{
                return res.send({status : false})
            }
        })
    }
    if(payload.searchBy=="Rate Plan"){
        console.log("Rate Plan")
        newEnrollementDetails.find({
            plan_type:payload.rate_plan
        })
        .then((enrollementDetails)=>{
            console.log("<<<<<<<Details>>>>>>>>>>>",enrollementDetails)
            if(enrollementDetails!=""){
                if(enrollementDetails[0].plan_type==payload.rate_plan){
                    return res.send({status : true,enrollementDetails})
                }  
            } else{
                return res.send({status : false})
            }
        })
    }
    if(payload.searchBy=="Promo Code"){
        console.log("Promo Code")
        newEnrollementDetails.find({
            offers:payload.promo_code
        })
        .then((enrollementDetails)=>{
            console.log("<<<<<<<Details>>>>>>>>>>>",enrollementDetails)
            if(enrollementDetails!=""){
                if(enrollementDetails[0].offers==payload.promo_code){
                    return res.send({status : true,enrollementDetails})
                }  
            } else{
                return res.send({status : false})
            }
        })
    }
    if(payload.searchBy=="Enrollment Date"){
        console.log("Enrollment Date")
        // newEnrollementDetails.find({
        //     offers:payload.promo_code
        // })
        // .then((enrollementDetails)=>{
        //     console.log("<<<<<<<Details>>>>>>>>>>>",enrollementDetails)
        //     if(enrollementDetails!=""){
        //         if(enrollementDetails[0].offers==payload.promo_code){
        //             return res.send({status : true,enrollementDetails})
        //         }  
        //     } else{
        //         return res.send({status : false})
        //     }
        // })
    }
    if(payload.searchBy=="Utility"){
        console.log("Utility")
        newEnrollementDetails.find({
            accountInfo:payload.utility_name
        })
        .then((enrollementDetails)=>{
            console.log("<<<<<<<Details>>>>>>>>>>>",enrollementDetails)
            if(enrollementDetails!=""){
                if(enrollementDetails[0].accountInfo==payload.utility_name){
                    return res.send({status : true,enrollementDetails})
                }  
            } else{
                return res.send({status : false})
            }
        })
    }
    if(payload.searchBy=="Commodity"){
        console.log("Commodity")
    }
    if(payload.searchBy=="Account Number"){
        console.log("Account Number")
    }
}