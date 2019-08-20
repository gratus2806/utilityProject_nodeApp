'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const db_config_feedupload = require('../config/config').db_config_feedupload;


// transation details schema
let FeeduploadDetailsSchema = new Schema({
    userId: { type: String },
    auther_name: { type: String },
    feed:{ type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model(db_config_feedupload.models.FeeduploadDetails, FeeduploadDetailsSchema);