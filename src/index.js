const express= require("express");
const {PORT} =require('./config/serverconfig');
const bodyParser =require("body-parser");



const setupAndstartServer =async () =>{
// create a express object
const app =express();
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
     console.log(process);
     console.log(process.env);
})
}
setupAndstartServer();