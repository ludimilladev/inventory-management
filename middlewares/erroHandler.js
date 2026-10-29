const errorHandler = (err,req,res,next) => {
    if(err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((e) => e.message);
        return res.status(400).json({
            message: "Validation failed",
            errors: messages,
        });
    }

    if(err.name == "CastError"){
        const message = err.path === "_id" ? "Invalid id format" : `Invalid value for field "${err.path}"`;

        return res.status(400).json({message});
    }

    console.error(err);
    res.status(500).json({message: "Internal server error"});
};

module.exports = errorHandler;
