import express from 'express';
import { dbConnect } from './config/db.js';
import categoryRouter from './routers/category.js';
import authRouter from './routers/auth.js';

const app = express();
const PORT = 6060

dbConnect();

app.use(express.json());

app.use('/api/v1/category/', categoryRouter)
app.use('/api/v1/auth/', authRouter)

app.listen(PORT, () => {
    console.log(`Server is running: ${PORT}`)
})