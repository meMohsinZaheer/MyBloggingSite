const userManagementModel = require('../models/UserManagementModel')
const bcrypt=require('bcrypt');
const jsonwebtoken= require('jsonwebtoken')

const userRegister=async (req,res)=>{
    try {
        const {fullName,email,password,repeatPassword,phone}=req.body;
        const checkIfAdminAlreadyExists=await userManagementModel.findOne({
            email:email
        })
        if (checkIfAdminAlreadyExists?.userPrivilege==='Admin'){
            return res.json({
                Message:'Something went wrong Please ask admin',
                Status: null,
                Data:false
            })
        }
        let checkAdminIdentity= email.split('@')[0];
        checkAdminIdentity= checkAdminIdentity.toLowerCase();
        if(checkAdminIdentity==='admin'){
            const adminToCreate = new userManagementModel({
                fullName,email,password,repeatPassword,phone,userPrivilege:'Admin'
            });
            const adminToSave= await adminToCreate.save();
            return res.json({
                Message:'Register Successfully',
                Data:true
            })
        }
        const userToCreate=new userManagementModel({
            fullName,email,password,repeatPassword,phone
        })
        const userToSave= await userToCreate.save()
        res.json({
            Message:'Register Successfully',
            Data:true
        })
    } catch (error) {
        res.json({
            Error:error.message,
            Data:false,
            Result:null
        })
    }
}

module.exports={
    userRegister
}