const express = require('express')
const router = express.Router()
var Employee = require('../model/employeModel')


//first we have to create by using the post method , while using the post method
// we need to use the body-parser to read the data 

router.post('/', (req,res)=>{
  let newEmp = new Employee(req.body)
  newEmp.save().then((data)=>res.json(data)).catch((err)=>console.log(err))
})



// after creating the data we have to get the all the data by using the get method

router.get('/', (req,res)=>{
    Employee.find({}).then((data)=>res.json(data)).catch((err)=>console.log(err))
  })

// by getting the data by using the id 
// here why we are using {id} object format 
//When you use req.params, it contains the route parameters as key-value pairs. 
// For example, if your route is /employee/:id and the request URL is /employee/123,
//  then: req.params = { id: "123" };
//we did object destrucing 
// const { id } = req.params; or 
// we can also write const id = req.params.id

  router.get('/:id', (req,res)=>{
    const {id} = req.params
    Employee.findById(id).then((data)=>res.json(data)).catch((err)=>console.log(err))
  })


  router.put('/:id', (req,res)=>{
    const {id} = req.params
    Employee.findByIdAndUpdate(id, req.body, {new:true}).then((data)=>res.json(data)).catch((err)=>console.log(err))
  })


  router.delete('/:id', (req,res)=>{
    const {id} = req.params
    Employee.findByIdAndDelete(id).then((data)=>res.json(data)).catch((err)=>console.log(err))
  })

module.exports = router