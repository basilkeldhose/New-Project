const mongoose =require('mongoose')
mongoose.Promise=global.Promise
mongoose.connect( "mongodb://localhost:27017/project", (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('/admin.schema')
require('/student.schema')



module.exports=mongoose