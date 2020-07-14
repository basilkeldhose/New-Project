require('./config/passport')
 require('./routes');

const express =require('express')
const app =express()
const passport=require('passport')


app.use(passport.initialize())
const index=require('./index')



app.use('/api',index)



app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});
app.listen(8000,()=>{
    console.log("server connected on port 8000.....!")
})