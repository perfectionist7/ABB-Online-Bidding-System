const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: false,
        useUnifiedTopology: false,
    };
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Backend Database connected!");
    }
    catch(error) {
        console.log(error);
    }
};