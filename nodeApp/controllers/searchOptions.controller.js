module.exports.Utility_list = (req, res) => {
    // Utility_list.find().sort({'_id':-1}).limit(6)
    // .then((feed) => {
       var Utility_listArray=[{"Utility_list":"Select"},{"Utility_list":"Consolidated Edison Company Of New York Inc."},{ "Utility_list":"Long Island Power Authority"}];
        return res.send({status : true, Utility_lists : Utility_listArray })
    // }) 
}
module.exports.CommodityList = (req, res) => {
    // FeeduploadDetails.find().sort({'_id':-1}).limit(6)
    // .then((feed) => {
        var CommodityListArray =[{CommodityList:"Select"},{account_type:"Electric"}];
        return res.send({status : true, CommodityLists : CommodityListArray })
    // }) 
}
module.exports.c = (req, res) => {
    // FeeduploadDetails.find().sort({'_id':-1}).limit(6)
    // .then((feed) => {
       var AccountTypeListtArray =[{AccountTypeList:"Select"},{AccountTypeList:"Commercial"},{AccountTypeList:"Industrial"},{AccountTypeList:"Residential"}];
        return res.send({status : true, AccountTypeLists : AccountTypeListtArray })
    // }) 
}
