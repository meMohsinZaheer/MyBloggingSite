//Acquiring Dependencies
const express=require('express')
const Router=express.Router()

//Calling my Controllers
const {ProductData,GetData, GetDataById,UpdateById,UpdateImageById}=require('../controller/DataManagementController')

//Calling Middlewares
const{UploadProductImage}=require('../middlewares/UploadMedia')

Router.post('/UploadData',UploadProductImage.array('images',20),ProductData)
Router.get('/GetData',GetData)
Router.get('/GetDataById/:_id',GetDataById)
Router.post('/UpdateById',UpdateById)
Router.post('/UpdateImage',UpdateImageById)

module.exports=Router;