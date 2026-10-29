const express = require("express");
const connect = require("./db");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middlewares/erroHandler");

const app = express()
app.use(express.json());

connect()

app.get("/", (req, res) => {
    res.json({message: "Inventory API working"})
});

app.use("/products", productRoutes);

app.use((req,res) => {
    res.status(404).json({message: "Route not found"})
})

app.use(errorHandler)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});