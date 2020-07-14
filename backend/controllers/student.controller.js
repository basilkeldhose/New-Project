const mongoose = require('mongoose')
const passport = require('passport')
const Student= mongoose.model('Student')


module.exports.student = (req, res, next) => {
    var student = new Student();
    student.fullname=req.body.fullname
    student.rollno=req.body.rollno
    student.class=req.body.class
    student.address=req.body.address
    student.phone=req.body.phone
    student.gender=req.body.gender

    student.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
            return next(err);
    });

}
module.exports.studentProfile = (req, res, next) => {
    Student.find({ _id: req._id },
        (err, student) => {
            if (!student)
                return res.status(404).json({ status: false, message: 'student not found.' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['fullname','rollno','class','address','phone no','gender']) });
        }
    );

    }