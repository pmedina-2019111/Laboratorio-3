const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CNN,{});
        console.log('DataBase Connected correctly');
    }catch(e){
        throw new Error('Error Connecting DataBase', e)
    }
}

module.exports = {
    dbConnection
}