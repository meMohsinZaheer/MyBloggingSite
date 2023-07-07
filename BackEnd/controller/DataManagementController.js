const DataModel=require('../models/DataManagementModel')
const fs=require('fs')

const ProductData= async (req,res)=>{
    try {
        const {title,description}=req.body;
        let ImageDetails=[]
        req.files.forEach(arrayobject=>{
            const {filename,originalname,mimetype}=arrayobject;
            ImageDetails.push({
                ImageUrl:`assets/News/${title}`,
                ImageName:originalname,
                ImageMimeType:mimetype
            })
        })
        const docToCreate =new DataModel({
            title,description, imagedetails:ImageDetails
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

module.exports={
    ProductData
}