'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const db_config_authentication = require('../config/config').db_config_authentication;

// transation details schema
let AuthenticationDetailsSchema = new Schema({
    userId: { type: String },
    status: { type: String },
    password:{ type: String },
    username:{ type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model(db_config_authentication.models.AuthenticationDetails, AuthenticationDetailsSchema);