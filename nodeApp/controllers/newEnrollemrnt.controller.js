const newEnrollementDetails = require('../models/newEnrollement');
module.exports.newEnrollement = (req, res) => {
    const payload = req.body;
    console.log("newenrollemrnt payload",payload['selectedPlan'].plan_type)
    let newRecord = new newEnrollementDetails({
        userId:payload.userId ,
        firstName:payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        phoneNo: payload.phoneNo,
        socialSecurity: payload.socialSecurity,
        billing_method:"",
        Date_birth: payload.Date_birth,
        authorized: payload.authorized,
        samebillingAddress: payload.samebillingAddress,
        address:payload['billingAddress'].address,
        state: payload['billingAddress'].state,
        address_2: payload['billingAddress'].address_2,
        zip_code: payload['billingAddress'].zip_code,
        city:payload['billingAddress'].city,
        Commodity: payload.Commodity,
        Utility: payload.Utility,
        authorizedContacting: payload.authorizedContacting,
        ageAuthorized: payload.ageAuthorized,
        VerifiedChanges: payload.VerifiedChanges,
        plan_type:payload['selectedPlan'].plan_type,
        unit_rate:payload['selectedPlan'].unit_rate,
        units:payload['selectedPlan'].units,
        powerYour_Tomorrow:payload['selectedPlan']. powerYour_Tomorrow,
        months:payload['selectedPlan'].months,
        offers:payload['selectedPlan'].offers,
        green_energy:payload['selectedPlan'].green_energy,
        earlyTermination_fee:payload['selectedPlan']. earlyTermination_fee,
        status:"Pending"
    })
    return newRecord.save()
    .then((newEnrollementResponse)=>{
        if(!!newEnrollementResponse){
            return res.send({status : true })
        } else{
            return res.send({status : false })
        }
    })
}