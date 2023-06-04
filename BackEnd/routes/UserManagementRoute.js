const express=require('express')
const Router=express.Router()

const{userRegister}=require('../controller/UserManagementController')

Router.post('/userRegister',userRegister);

module.exports=Router;