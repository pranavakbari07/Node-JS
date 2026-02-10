const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service : "gmail",
    auth:{
        user :"pranavakbari07@gmail.com",
        pass : "qtyynupzdgwkaevb"
    }
})


module.exports.sendOtp = (email,otp)=>{
    let mailoptions = {
        to : email,
        from : "pranavakbari07@gmail.com",
        subject : "Password Reset OTP",
        text : `Your password reset otp is ${otp}`
    }

    transport.sendMail(mailoptions)
}