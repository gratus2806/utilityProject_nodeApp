const newEnrollementDetails = require('../models/newEnrollement');
module.exports.changeRateSearch = (req, res) => {
    const payload = req.body;
    console.log("search enrollemrnt payload",payload)
        newEnrollementDetails.find({
            Utility:payload.utility_type,
            plan_type:payload.plan_type 
        })
        .then((enrollementDetails)=>{
            console.log("<<<<<<<Details>>>>>>>>>>>",enrollementDetails)
            if(enrollementDetails!=""){
                if(enrollementDetails[0].Utility==payload.utility_type && enrollementDetails[0].plan_type==payload.plan_type){
                    return res.send({status : true,enrollementDetails})
                }  
            } else{
                return res.send({status : false})
            }
        })
}
module.exports.update_changeRate = (req, res) => {
    const payload = req.body;
    console.log("search enrollemrnt payload",payload.selected_userId[0])
    // const userId = payload.selected_userId.map((userIds,i)=>userIds.selected_userId[i])
    // console.log("userId>>>>>>>",userId)
    return newEnrollementDetails.find({
        userId:payload.selected_userId[0]
    })
    .then((enrollementDetails)=>{
        //  console.log("in then line 30",enrollementDetails)
        return newEnrollementDetails.findOneAndUpdate({userId:enrollementDetails[0].userId}, 
        {
            billing_method: payload.billing_method,
            plan_type: payload.changedPlan_type,
            unit_rate:payload.unit_rate,
            earlyTermination_fee:payload.earlyTermination_fee,
            months:payload.months,
            updated_date:Date.now()
        },{new: true}, (err, doc) => {
            if (err) {
            console.log("Something wrong when updating data!",err);
            }
            var result = Object.keys(doc).map(function(key) {
                return [doc[key]]
            })
            console.log("results>>>>>>",result)
            return res.send({status : true,result})                
        });
    })

}
