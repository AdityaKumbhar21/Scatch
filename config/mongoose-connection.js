const mongoose = require('mongoose'); 
const config = require('config');
const dbr = require('debug')("development:mongoose");  

mongoose.
connect(`${config.get("MONGODB_URI")}/scatch`)
.then(()=>{
    dbr("Connected");
})
.catch((err)=>{
    dbr(err);
});


module.exports = mongoose.connection;