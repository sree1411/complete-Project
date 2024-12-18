 const express = require('express')
 const app = express();
 var bodyParser = require('body-parser');
 const port = 5000;
 var employeeRouter = require('./routes/employeRouter')

 var mongoose = require('mongoose')

 var mcurl = 'mongodb+srv://sreekanthrenati14:srikanth123@cluster0.0bwh7.mongodb.net/rb40?retryWrites=true&w=majority&appName=Cluster0'
 mongoose.connect(mcurl).then(()=>console.log("connected to mongodb")).catch((err)=>console.log(err))

 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())


 app.use('/employee', employeeRouter)

 app.listen(port, ()=>{
    console.log(`local host running on port ${port}`);
 })