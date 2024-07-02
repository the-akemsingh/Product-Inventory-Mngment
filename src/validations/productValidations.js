
const { z } = require("zod");

const ProductSchema = z.object({
  name: z.string().min(3),
  price: z.number().positive(),
  description: z.string(),
  category: z.string().toLowerCase().min(3, "Category must be at least 3 characters long and in lowercase"),
  quanity: z.number().positive(),
});

module.exports = ProductSchema;