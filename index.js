const express = require("express");
const connect = require("./db");
const productRoutes = require("./routes/productRoutes");

const app = express()
app.use(express.json());

connect()

app.get("/", (req, res) => {
    res.json({message: "Inventory API working"})
});

app.use("/products", productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});