const { PrismaClient } = require("../../db/node_modules/@prisma/client");
const prisma = new PrismaClient();
// const { ProductSchema } = require("../validations/productValidations");

const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    if (!products.length) {
      return res.status(200).json({ message: "No product in inventory" });
    }
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    if (!categories.length) {
      return res.status(200).json({ message: "No category in inventory" });
    }
    res.status(200).json({ categories });
  } catch (error) {
    console.log(error);
  }
};

const getProductbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const productId = parseInt(id);

    const product = await prisma.product.findUnique({
      where: { id:productId },
    });

    res.status(200).json({ product });
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
};

const createCategory = async (req,res) => {
  try {
    const { name } = req.body;
    const category = await prisma.category.findUnique({
      where: { name },
    });
    if (category) {
      return res.status(400).json({ message: "Category already exists" });
    }
    const newCategory = await prisma.category.create({
      data: {
        name: name,
      },
    });
    res.status(201).json({ newCategory, message: "Category created successfully" });
  } catch (error) {
    console.log(error);
  }
};

const addnewProduct = async (req, res) => {
  try {
    const { name, price, description, category, quantity } = req.body;
    // const validateProduct = ProductSchema.parse(req.body);

    const categoryIds = category;
    const categories = await prisma.category.findMany({
      where: {
        id: {
          in: categoryIds,
        },
      },
    });

    if (categories.length !== categoryIds.length) {
      return res
        .status(400)
        .json({ message: "One or more categories do not exist" });
    }

    const newProduct = await prisma.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        category: {
          connect: categoryIds.map((categoryId) => ({
            id: categoryId,
          })),
        },
        merchant: {
          connect: {
            id: req.user.id,
          },
        },
      },
      include: { category: true },
    });
    res.status(201).json({ newProduct, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category, quantity } = req.body;
    const categoryIds = category
    const categories = await prisma.category.findMany({
      where: {
        id: {
          in: categoryIds,
        },
      },
    });

    if (categories.length !== categoryIds.length) {
      return res
        .status(400)
        .json({ message: "One or more categories do not exist" });
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name: name,
        price: price,
        description: description,
        quantity: quantity,
        category: {
          set: categoryIds.map((categoryId) => ({
            id: categoryId,
          })),
        },
      },
      include: { category: true },
    });

    res.status(200).json({ updatedProduct, message: "Product updated successfully" });

  } catch (error) {
    console.log(error);
  }
};

const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const productId = parseInt(id);

    const productExists = await prisma.product.findUnique({
      where: { id: productId }
    });
    if (!productExists) {
      return res.status(404).json({ message: "Product not found" });
    }

    const productToDelete = await prisma.product.delete({
      where: { id: productId },
    });
    res.status(200).json({ productToDelete, message: "Product deleted successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {
  getAllProducts,
  getProductbyId,
  addnewProduct,
  updateProduct,
  deleteProducts,
  createCategory,
  getCategories
};
