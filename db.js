require("dotenv").config();
const mogoose = require("mongoose");

async function connection(){

    try {
        await mogoose.connect(process.env.MONGO_URI);
        console.log("connected to MongoDB");

    } catch (erro) {
        console.error("Erro to connected:", erro.message);
        process.exit(1);
    }
}

module.exports = connection;