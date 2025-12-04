const express= require("express");
const {PORT} =require('./config/serverconfig');
const bodyParser =require("body-parser");
const {City} =require('./models/index');
const CityRepository=require('./repository/city-repository');

const setupAndstartServer =async () =>{
// create a express object
const app =express();
const PORT = 3000;
app.listen(PORT, async ()=> {
    console.log(`server started at ${PORT}`);
    //  console.log(process);
    //  console.log(process.env);
    //    console.log(City);
     const repo =new CityRepository();
     repo.createCity({name:"New Agra"})

});
}
setupAndstartServer();