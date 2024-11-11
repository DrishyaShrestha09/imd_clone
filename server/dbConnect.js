const mongoose = require('mongoose');

const dbConnect = () =>{
    const connectionParams = {useNewParser:true};
    mongoose.connect(process.env.DB, connectionParams);
    
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