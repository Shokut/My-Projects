require("dotenv").config();
 SENDGRID_API_KEY='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';
console.log(SENDGRID_API_KEY);
const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(SENDGRID_API_KEY);
const message = {
    to:"shoukatanjum567@gmail.com",
    from:"muhammad.shokut@techloyce.com",
    subject:"Sendgrid Email",
    text:"Test message from sendgrid",
    html:"<strong> Message sent by sendgrid.</strong>",

};
sendGridMail.send(message).then(()=>{
    console.log("Email was sent");
})
.catch((error)=>{
    console.log(error);
});