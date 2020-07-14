const mongoose =require("mongoose")
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
var adminSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'fullname canot be empty !'
    },
    address: {
        type: String,
        required: 'email canot be empty !',
        unique: true
    },
    username: {
        type: String,
        required: 'phone no canot be empty !',
        unique: true
    },
    password: {
        type: String,
        required: 'password canot be empty !',
        minlength: [8, 'password must be atleast 8 charecter long']
    },

    saltsecet: String
});



adminSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash
            this.saltsecet = salt
            next();
        });
    });
});
adminSchema.methods.varifyPassword=function(password){
    return bcrypt.compareSync(password,this.password)
}


adminSchema.methods.generatejwt=function(){
    return jwt.signin({_id:this._id},
        process.env.JWT_SECRET,
        {
        expiresIn: process.env.JWT_EXP
    });
}      


mongoose.model('Admin',adminSchema)