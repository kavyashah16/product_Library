import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'

import productRoutes from './routes/product.route.js'

dotenv.config();

const app = express()

app.use(express.json()); // allow json input from user in req.body

app.use("/api/products", productRoutes)

const port = process.env.PORT

app.listen(port, () => {
  connectDB();  
  console.log(`Success! ${port}`)
})
