const express = require('express')
const cors = require('cors')
const { sendFoodBlockInfo } = require('./emails/foodBlocks')

const app = express()

app.use(cors())

app.get('/caloriezones/email', async (req, res) => {
    try {
        sendFoodBlockInfo(req.query.email, req.query.bmr, req.query.tee, req.query.bmi)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.listen(4000, () => {
    console.log('running on port 4000')
})