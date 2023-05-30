//Block Start Dependencies
const express=require('express');
// const dotenv = require('dotenv');
// dotenv.config();
const ApplicationConfiguration=require('./configuration/ApplicationConfiguration')
const ResponseofMyDataBase=require('./configuration/DataBaseConfiguration')
//Block End Dependencies

//Block Start Initialize the app
const app=express();
const PORT=process.env.PORT || 1234;
//Block End Initialize the app

//Start Block for listening your app on defined port
app.listen(PORT,()=>{
    console.log(`Your app has launched from the port ${PORT}`)
    // console.log(process.env.PORT)
})
//End Block for listening your app on defined port