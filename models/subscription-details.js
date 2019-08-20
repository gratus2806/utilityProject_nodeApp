'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const db_config_subscribe = require('../config/config').db_config_subscribe;


// transation details schema
let SubscriptionDetailsSchema = new Schema({
    userId: { type: String },
    status: { type: String },
    email:{ type: String },
    username:{ type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model(db_config_subscribe.models.SubscriptionDetails, SubscriptionDetailsSchema);