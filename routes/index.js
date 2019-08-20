const express = require('express');
const router = express.Router();

const ctrlsubscription = require('../controllers/feeds.controller');
const ctrlloadfeeds = require('../controllers/feeds.controller');
const ctrlautherFeed = require('../controllers/feeds.controller');
const ctrllogin = require('../controllers/authentication.controller');
// const ctrlUtility_list = require('../controllers/searchOptions.controller');
// const ctrlCommodityList = require('../controllers/searchOptions.controller');
// const ctrlAccountTypeList = require('../controllers/searchOptions.controller');
const ctrlnewEnrollement = require('../controllers/newEnrollemrnt.controller');
const ctrlenrollement = require('../controllers/enrollement.controller');
const ctrlchangedrop = require('../controllers/changedrop.controller');

router.post('/subscription',ctrlsubscription.subscription);
router.get('/loadfeeds',ctrlloadfeeds.loadfeeds);
router.post('/autherFeed',ctrlautherFeed.autherFeed);
router.post('/login',ctrllogin.loginctrl);
router.post('/newEnrollement',ctrlnewEnrollement.newEnrollement);
router.post('/searchEnrollement',ctrlenrollement.searchEnrollement);
router.post('/changeRate',ctrlchangedrop.changeRateSearch);
router.post('/update_changeRate',ctrlchangedrop.update_changeRate);
// router.get('/Utility_list',ctrlUtility_list.Utility_list);
// router.get('/CommodityList',ctrlCommodityList.CommodityList);
// router.get('/AccountTypeList',ctrlAccountTypeList.AccountTypeList);

module.exports = router;