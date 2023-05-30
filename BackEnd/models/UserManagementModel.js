//Dependencies
const mongoose= require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds=parseInt(process.env.SALT_ROUND)

//Dependencies

//Date
const today=new Date();
const day=today.getDate()
const month=today.getMonth()
const year =today.getFullYear()
const time= today.getTime()
//Date

//Start Block Schema Creating
const userRegisterSchema = mongoose.Schema({
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    userPrivilege:{type:String,default:'User'},
    password:{type:String,required:true},
    repeatPassword:{type:String,required:true},
    saltString:{type:String},
    createdDate:{
        type:String,
        default:`${year}-${month}-${day}-${time}`
    }

},{timestamps:true}
)


userRegisterSchema.pre('save',async function(next){
    try {
        if(this.password===this.repeatPassword){
            const genSalt= await bcrypt.genSalt(saltRounds);
            const hashedPassword= await bcrypt.hash(this.password,genSalt)
            this.password=hashedPassword;
            this.repeatPassword=hashedPassword;
            this.saltString=genSalt;
            next();
        }
        else {
            // return({
            //     Message:"Password are mismatched"
            // })
            throw new Error('Password mismatch')
        }
    } catch (error) {
        return({
            Message:error.message,
            Data:false,
            Result:null
        })
    }
})
//End Block Schema Creating

module.exports= mongoose.model('UserRegistration',userRegisterSchema)

