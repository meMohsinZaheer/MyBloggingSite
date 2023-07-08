//Acquiring Dependencies
const express=require('express')
const Router=express.Router()

//Calling my Controllers
const {ProductData,GetData}=require('../controller/DataManagementController')

//Calling Middlewares
const{UploadProductImage}=require('../middlewares/UploadMedia')

Router.post('/UploadData',UploadProductImage.array('images',20),ProductData)
Router.get('/GetData',GetData)

module.exports=Router;