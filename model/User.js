const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    pseudo:{ type: String, required: true ,unique: true},
    email: { type: String, required: true , unique : true },
    password : {type: String, required: true },
    isVerifie: { type: Boolean, default: false},
    isAdmin: { type: Boolean, default:false},
    // forgotPasswordToken: string,
    // forgetPasswordTokenExpirey: Date,
    // verifyToken: string,
    // verifyTokenExpery: date
})
// on recupere le user si il existe dans notre bd ou si non on cree un nouveau user
const User = mongoose.models.users || mongoose.model("users",userSchema)
export default User