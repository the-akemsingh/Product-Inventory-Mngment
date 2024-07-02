const express = require('express');
const dotenv = require('dotenv');
const merchantRouter = require('./routes/merchant');
const productRouter = require('./routes/product');

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api/v1/products', productRouter);
app.use('/api/v1/merchant', merchantRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});