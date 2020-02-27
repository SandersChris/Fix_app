const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_KEY)

const sendCalorieZoneInfo = async (email, bmr, tee, bmi) => {
    sgMail.send({
        to: 'christopherdksanders@gmail.com',
        from: 'christopherdksanders@gmail.com',
        subject: `${email} requested a calorie zone sheet!`,
        text: `email: ${email} tee: ${bmr} bmr: ${tee} bmi: ${bmi}`
    })
}

module.exports = {
    sendCalorieZoneInfo
}