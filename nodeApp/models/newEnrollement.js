'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const db_config_subscribe = require('../config/config').db_config_subscribe;


// transation details schema
let newEnrollementSchema = new Schema({
    userId: { type: String },
    firstName:{ type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNo: { type: String },
    socialSecurity: { type: String },
    Date_birth: { type: String },
    authorized: { type: String },
    billing_method:{ type: String },
    // billingAddress: { type: string },
    address:{ type: String },
    state: { type: String },
    address_2: { type: String },
    zip_code: { type: String },
    city:{ type: String },
    samebillingAddress: { type: String },
    
    Utility: { type: String },
    Commodity: { type: String },
    authorizedContacting: { type: String },
    ageAuthorized: { type: String },
    VerifiedChanges: { type: String },
    plan_type:{ type: String },
    unit_rate:{ type: String },
    units:{ type: String },
    powerYour_Tomorrow:{ type: String },
    months:{ type: String },
    offers:{ type: String },
    green_energy:{ type: String },
    earlyTermination_fee:{ type: String },
    status:{ type: String },
    updated_date:{type: Date},
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model(db_config_subscribe.models.newEnrollement, newEnrollementSchema);