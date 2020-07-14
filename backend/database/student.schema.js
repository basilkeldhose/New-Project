const mongoose =require("mongoose")
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
var studentSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'fullname canot be empty !'
    },
    rollno: {
        type: String,
        required: 'rollno canot be empty !',
        unique: true
    },
    class: {
        type: String,
        required: 'class  canot be empty !',
        unique: true
    },
    address: {
        type: String,
        required: 'address  canot be empty !',
        unique: true
    },
    phone: {
        type: String,
        required: 'phone no  canot be empty !',
        unique: true
    },
    gender: {
        type: String,
        required: 'gender  canot be empty !',
        unique: true
    },
});



// adminSchema.pre('save', function (next) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(this.password, salt, (err, hash) => {
//             this.password = hash
//             this.saltsecet = salt
//             next();
//         });
//     });
// });
// adminSchema.methods.varifyPassword=function(password){
//     return bcrypt.compareSync(password,this.password)
// }


// adminSchema.methods.generatejwt=function(){
//     return jwt.signin({_id:this._id},
//         process.env.JWT_SECRET,
//         {
//         expiresIn: process.env.JWT_EXP
//     });
// }      


mongoose.model('Student',studentSchema )