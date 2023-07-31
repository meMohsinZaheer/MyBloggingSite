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
// const UpdateImageById=async (req,res)=>{
//     const {id,newImageDetails,oldImageDetails}=req.body;
//     const docToGet= await DataModel.findOne({_id:id})
//     if(!!docToGet){
//         docToGet.imagedetails.forEach(pathOfFiles => {
//             fs.unlinkSync(`${pathOfFiles.ImageUrl}`);
//         })
//         fs.rmdirSync(`../assets/Product/${docToGet.title}`)

//         res.json({
//             Message:'Deleted Successfully'
//         })
//    }
   
// }

const UpdateImageById = async (req, res) => {
    const { id, newImageDetails, oldImageDetails } = req.body;
    console.log(newImageDetails)
    const docToGet = await DataModel.findOne({ _id: id });

    if (!!docToGet) {
        const imageToDelete = docToGet.imagedetails.find((image) => image.ImageUrl === oldImageDetails.ImageUrl);

        if (imageToDelete) {
            // Delete the file from the filesystem
            fs.unlinkSync(`${imageToDelete.ImageUrl}`);
            // fs.rmdirSync(`../assets/Product/${docToGet.title}`)

            // Remove the image from the 'imagedetails' array
            docToGet.imagedetails = docToGet.imagedetails.filter((image) => image.ImageUrl !== oldImageDetails.ImageUrl);
            const newselectedimage={
                ImageUrl:`assets/Product/${docToGet.title}/${newImageDetails.name}`,
                ImageName:`${newImageDetails.name}`,
                ImageMimeType:`${newImageDetails.type}`
            }
           docToGet.imagedetails.push(newselectedimage)
            // Save the updated document 
            await docToGet.save();

 
            res.json({
                Message: 'Deleted Successfully',
            });
        } else {
            res.status(404).json({
                Message: 'Image not found for deletion.',
            });
        }
    } else {
        res.status(404).json({
            Message: 'Document not found.',
        });
    }
};


const UpdateById=async(req,res)=>{
    console.log(req.body)
    try {
        const Id= req.body._id;
        const payLoad= req.body;
        const docToUpdate=await DataModel.updateOne(
            {_id:Id},
            payLoad
        )
        res.json({
            Message:'Updated Successfully',
            Data:true,
            Result:docToUpdate
        })
    } catch (error) {
        res.json({
            Message:error,
            Result:null,
            Data:false
        })
    }
}

module.exports={
    ProductData,
    GetData,
    GetDataById,
    UpdateById,
    UpdateImageById
}