const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'


sgMail.setApiKey(sendgridAPIKey)

const sendFoodBlockInfo = async (email, bmr, tee, bmi) => {
    sgMail.send({
        to: 'christopherdksanders@gmail.com',
        from: 'christopherdksanders@gmail.com',
        subject: `${email} requested a calorie zone sheet!`,
        text: `email: ${email} tee: ${bmr} bmr: ${tee} bmi: ${bmi}`
    })
}

module.exports = {
    sendFoodBlockInfo
}