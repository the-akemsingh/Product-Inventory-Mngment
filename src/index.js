import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routes/product';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api/v1', productRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});