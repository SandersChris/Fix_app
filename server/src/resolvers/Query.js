const Query = {
    async emails(parent, args, { prisma }, info) {
        return prisma.query.emails(null, info)
    },
    async email(parent, args, { prisma }, info) {
        return prisma.query.email(null, info)
    }
}

export { Query as default }