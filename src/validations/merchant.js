const { z } = require('zod');

const MerchantRegisterSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
});


const MerchantLoginSchema= z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

module.exports = { MerchantRegisterSchema, MerchantLoginSchema };