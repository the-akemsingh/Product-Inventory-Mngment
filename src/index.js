import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routes/product';
import merchantRouter from './routes/merchant';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api/v1/products', productRouter);
app.use('/api/v1/merhcant', merchantRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});