const mongoose = require("mongoose");

const dbConnect = () =>{
    mongoose.set("useUnifiedTopology", true, "useNewUrlParser", true)
    mongoose.connect(process.env.MONGODB_URI); // chaged URI to fix code error
    
    mongoose.connection.on('connected', () => {
        console.log('Connected to the database');
    });

    mongoose.connection.on('error', (err) => {
        console.log(`Error while connecting to database: ${err.message}`);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from the database');
    });
};

module.exports = dbConnect;