// check env.
var env = process.env.NODE_ENV || 'development';
// fetch env. config
var config = require('./config.json');
var envConfig = config[env];

let db_config_subscribe = {
    dbName: 'Enersys',
    models: {
        // PaymentNotifications: 'PaymentNotifications',
        SubscriptionDetails: 'SubscriptionDetails',
        newEnrollement:'newEnrollement'
    }
};
// let db_config_newEnrollement = {
//     dbName: 'Enersys',
//     models: {
//         FeeduploadDetails: 'FeeduploadDetails'
//     }
// };
let db_config_feedupload = {
    dbName: 'Enersys',
    models: {
        FeeduploadDetails: 'FeeduploadDetails'
    }
};

let db_config_authentication = {
    dbName: 'Enersys',
    models: {
        AuthenticationDetails: 'AuthenticationDetails'
    }
}
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);
exports.db_config_subscribe = db_config_subscribe;
exports.db_config_feedupload = db_config_feedupload;
exports.db_config_authentication = db_config_authentication;