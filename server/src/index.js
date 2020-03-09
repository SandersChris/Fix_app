import '@babel/polyfill/noConflict'
import { GraphQLServer } from 'graphql-yoga'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Email from './resolvers/Email'
import prisma from './prisma'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        Email
    },
    context(request) {
        return {
            prisma,
            request
        }
    }
})

server.start({ port: process.env.PORT || 4000 }, () => {
    console.log('The server is up!')
})











// const express = require('express')
// const cors = require('cors')
// const { sendCalorieZoneInfo } = require('./emails/calorieZones')

// const app = express()
// const port = process.env.PORT || 4000

// app.use(cors())

// app.get('/caloriezones/email', async (req, res) => {
//     try {
//         sendCalorieZoneInfo(req.query.email, req.query.bmr, req.query.tee, req.query.bmi)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// app.listen(port, () => {
//     console.log(`running on port ${port}`)
// })