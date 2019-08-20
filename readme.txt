--->Start
--->In Node Server We created "Routes dir" in which we first created routes which lead to the perticular controller
--->Then in "Controllers dir" 
    ->feeds.controller.js was created where all the modules were declered and exported .
        ->there are Three Modules exported
            1.loadfeeds
            2.autherFeeds
            3.subscription
        ->In loadfeeds it responds the feeds which Author has uploaded to the UI to display it.
        ->In autherFeeds it gets data in request which author uploads and in this function once to data is saved in DB a new Function is called named "subscriptonUser" where the broadcast of mail is done in which auther sends his new feeds to the subscribed users
        ->In subscription When the user enters the email id in UI and clicks subscribe button subscription gets that email in payload and saved in the DB so that in future If any Auther uploads any feeds They will be notified by email automatically. 
--->To send the mail using node Service Node Js provide different dependencies from which we have user "nodemailer" which we have imported in controller to use the mail service.