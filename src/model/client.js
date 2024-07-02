const { PrismaClient } = require('../../db/node_modules/@prisma/client');
const prisma = new PrismaClient();

module.exports = { prisma };