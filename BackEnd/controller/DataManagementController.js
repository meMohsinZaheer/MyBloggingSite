const DataModel=require('../models/DataManagementModel')
const fs=require('fs')

const ProductData= async (req,res)=>{
    try {
        const {title,description,category}=req.body;
        let ImageDetails=[]
        req.files.forEach(arrayobject=>{
            const {filename,originalname,mimetype}=arrayobject;
            ImageDetails.push({
                ImageUrl:`assets/Product/${title}/${filename}`,
                ImageName:originalname,
                ImageMimeType:mimetype
            })
        })
        const docToCreate =new DataModel({
            title,description, imagedetails:ImageDetails,category
        })
        const docToSave= await docToCreate.save()
        res.json({
            Message:'Data Saved Successfully',
            Body:docToSave,
            Data:true
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Result:null,
            Data:false 
        })
    }
}
const GetData=async(req,res)=>{
    try {
        const docToGet= await DataModel.find();
        res.json({
            Message:"All documents Found",
            Data:true,
            Result:docToGet
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}
const GetDataById=async(req,res)=>{
    try {
        
        const Id=req.params._id;
        
        const docToFind=await DataModel.findOne({_id:Id})
        res.json({
            Message:'Data Found Successfully',
            Data:true,
            Result:docToFind
        })
    } catch (error) {
        res.json({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
}

module.exports={
    ProductData,
    GetData,
    GetDataById
}