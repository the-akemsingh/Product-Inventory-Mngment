
const { z } = require("zod");

const ProductSchema = z.object({
  name: z.string().min(3),
  price: z.number().int().positive(),
  description: z.string(),
  category: z.array(z.number().int().positive()),
  quanity: z.number().positive(),
});

module.exports = ProductSchema;