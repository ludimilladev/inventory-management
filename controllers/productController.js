const Product = require("../models/Product");

const createProduct = async (req,res) => {

  
    const product = await Product.create(req.body);
    res.status(201).json(product);
        
  
};

const getProducts = async (req,res) => {
  
    const products = await Product.find();
    res.json(products);
    
   
};

const getProductById = async (req,res) => {

    
    const product = await Product.findById(req.params.id);

    if(!product) return res.status(400).json({message: "Product not found"});

    res.json(product)
    
  
};

const updateProduct = async (req,res) => {

   
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true, runValidators: true}

    );

    if(!product) return res.status(404).json({message: "Product not found"});

    res.json(product)
    
};

const deleteProduct = async (req,res) => {

    const product = await Product.findByIdAndDelete(req.params.id);

    if(!product) return res.status(404).json({message: "Product not found"});

    res.status(204).send();
    
   
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};