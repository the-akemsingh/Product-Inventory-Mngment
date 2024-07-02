const jwt = require("jsonwebtoken");
const { PrismaClient } = require('../../db/node_modules/@prisma/client');
const prisma = new PrismaClient();

module.exports = { prisma };
const bcrypt = require("bcrypt");
const {MerchantRegisterSchema} = require("../validations/merchant");
const {MerchantLoginSchema} = require("../validations/merchant");
const { configDotenv } = require("dotenv");

configDotenv();

const registerMerchant = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const validateddata = MerchantRegisterSchema.parse({ name, email, password });
    if (validateddata.error) {
      return res.status(400).json({ message: validateddata.error });
    }

    const merchantExists = await prisma.merchant.findUnique({
      where: { email },
    });
    if (merchantExists) {
      return res.status(400).json({ message: "Merchant already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const merchant = await prisma.merchant.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ email: merchant.email }, process.env.TOKEN_SECRET);
    res.status(201).json({ message: "Merchant created successfully" });

  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const loginMerchant = async (req, res) => {
  try {
    const { email, password } = req.body;

    const validateddata = MerchantLoginSchema.parse({ email,password });
    if (validateddata.error) {
      return res.status(400).json({ message: validateddata.error });
    }

    const merchant = await prisma.merchant.findUnique({
      where: { email },
    });
    if (!merchant) {
      return res.status(400).json({ message: "Merchant does not exist" });
    }

    const validPassword = await bcrypt.compare(password, merchant.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ email: merchant.email }, process.env.TOKEN_SECRET);
    // localStorage.setItem("token", token);
    res.status(200).json({token,"message":"Merchant logged in successfully"});

  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = { registerMerchant, loginMerchant };
