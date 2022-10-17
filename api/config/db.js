const mongoose = require('mongoose');


const mongoDBConnection = async ()=>{

    try{
        const connect =  mongoose.connect('mongodb://127.0.0.1/CB-Builder');
        console.log(`mongo DB connection successful`.bgYellow);
    }catch(error){
        console.log(`${error.message}`.bgRed);
    }
} 

module.exports = mongoDBConnection