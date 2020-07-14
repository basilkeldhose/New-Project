const mongoose = require('mongoose')
const passport = require('passport')
const Admin = mongoose.model('Admin')


module.exports.regiser = (req, res, next) => {
    var admin = new Admin();
    admin.fullname = req.body.fullname
    admin.address = req.body.address
    admin.username = req.body.username
    admin.password = req.body.password

    admin.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
            return next(err);
    });

}


module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, admin, info) => {
        if (err) {
            return res.status(400).json(err)
        }
        else if (admin) {
            return res.status(200).json({ "token": admin.generatejwt() })
        }
        else {
            return res.status(404).json(info)
        }

    })(req, res);
    
}
module.exports.userProfile = (req, res, next) => {
    Admin.find({ _id: req._id },
        (err, admin) => {
            if (!admin)
                return res.status(404).json({ status: false, message: 'User not found.' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['fullname','address','username']) });
        }
    );

    }