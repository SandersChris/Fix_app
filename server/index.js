const express = require('express')
const cors = require('cors')
const { sendCalorieZoneInfo } = require('./emails/calorieZones')

const app = express()
const port = process.env.PORT

app.use(cors())

app.get('/caloriezones/email', async (req, res) => {
    try {
        sendCalorieZoneInfo(req.query.email, req.query.bmr, req.query.tee, req.query.bmi)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})