import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'


const app=express();
const PORT=5000;  

app.use(bodyParser.json()); //using json data in whole application
app.use("/users",usersRoutes);//using routes
app.get("/",function(req,res){
    console.log("TEst");
    res.send("Hello na");

});



app.listen(PORT,function(req,res){
    console.log(`Server running ${PORT}`);
});

