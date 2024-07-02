import { z } from "zod";


const ProductSchema = z.object({
  name: z.string().min(3),
  price: z.number().positive(),
  description: z.string(),
  category: z.string().toLowerCase().min(3, "Category must be at least 3 characters long"),
  quanity: z.number().positive(),
});
