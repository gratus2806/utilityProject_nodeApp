const AuthenticationDetails = require('../models/authentication_details');
module.exports.loginctrl = (req, res) => {
    const payload = req.body;
    console.log("payload",payload)
    // let newRecord = new AuthenticationDetails({
    //     userId: Math.floor(10000000000 + Math.random() * 90000000000),
    //     username:"test",
    //     password:"test"
   
    AuthenticationDetails.find({
        username:payload.username,
        password:payload.password 
    })
    .then((authenticationDetails)=>{
        console.log("authenticationDetails",authenticationDetails)
        if(authenticationDetails!=""){
            if(authenticationDetails[0].username==payload.username && authenticationDetails[0].password==payload.password){
                return res.send({status : true,authenticationDetails})
            }  
        } else{
            return res.send({status : false})
        }
    })
    // return res.send({status : true})
}