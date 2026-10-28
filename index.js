const express = require("express");
const connect = require("./db");
const Product = require("./models/Product");

const app = express()
app.use(express.json());

connect()

app.get("/", (req, res) => {
    res.json({message: "Inventory API working"})
});

app.post("/products", async (req, res) => {
    try {
        
        const product =  await Product.create(req.body);
        res.status(201).json(product);
    } 
    catch (error){
        res.status(400).json({message: error.message});
    }
});

app.get("/products", async (req,res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get("/products/:id", async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

        res.json(product);
    }
    catch (error){
        res.status(400).json({message: error.message});
    }
});

app.put("/products/:id", async (req,res) => {

    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.json(product);
    }
    catch (error){
        res.status(400).json({message: error.message});
    }
})

app.delete("/products/:id", async (req,res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

        res.status(204).send();

    }
    catch (error){
        res.status(400).json({message: error.message});
    }
    

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});