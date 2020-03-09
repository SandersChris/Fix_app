import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET
})

export { prisma as default }


// prisma.query.emails(null, '{ id firstName email }').then(data => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// const createEmailForUser = async data => {
//     const email = await prisma.mutation.createEmail({
//         data: {
//             ...data
//         }
//     }, '{ id, firstName, lastName, email}')
//     return email
// }

// createEmailForUser({
//     firstName: 'Gregg',
//     lastName: 'Stewart',
//     email: 'Gregg@example.com'
// }).then(emails => {
//     console.log(JSON.stringify(emails, undefined, 2))
// })

// prisma.mutation.createEmail({
//      data: {
//          firstName: "Chris",
//          lastName: "Sanders",
//          email: "test1@example.com"
//      }
// }, '{ id firstName lastName email }').then(data => {
//     console.log(data)
// })