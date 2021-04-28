const mongoose =  require('mongoose')
const Schema = mongoose.Schema ;

const userSchema = new Schema({
    id : String,
    name : String,
    email: String ,
    password: String,
    address: String,
    

})

const User = new mongoose.model("User", userSchema) ;
module.exports = User