const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_KEY)

const sendCalorieZoneInfo = (email, bmr=0, tee=0, bmi=0) => {
    sgMail.send({
        to: 'sandersfl21@gmail.com',
        from: 'christopherdksanders@gmail.com',
        subject: `${email} requested a calorie zone sheet!`,
        text: `email: ${email} tee: ${bmr} bmr: ${tee} bmi: ${bmi}`
    })
}

module.exports = {
    sendCalorieZoneInfo
}

// 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