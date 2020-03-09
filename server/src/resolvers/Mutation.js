import sendCalorieZoneInfo from '../emails/calorieZones'

const Mutation = {
    async createEmail(parent, args, { prisma }, info) {
        const emailTaken = await prisma.exists.Email({ email: args.data.email })

        if (emailTaken) {
            throw new Error('Email Taken')
        }


        return prisma.mutation.createEmail({ data: args.data }, info)
    }
}

export { Mutation as default }