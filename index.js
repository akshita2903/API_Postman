import express from "express";
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
const app=express();

const PORT=5000;

app.use(bodyParser.json());

app.use('/users',userRoutes)

//GET REQUEST
app.get('/',(req,res)=>{
    console.log("TEST")
    res.send('Hello World');
})

app.listen(PORT,()=> console.log(`Server started on Port : http://localhost:${PORT}`));