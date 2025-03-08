import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./product.model.js";

dotenv.config();

const app = express()

app.use(express.json()); //middleware to allows us to accet JSON data in the req.data

app.post("/api/products", (req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try {
        newProduct.save();
        res.status(201).json({sucess: true, data: newProduct});
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
    }
});



app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
})