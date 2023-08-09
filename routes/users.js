import express from "express";
import { createuser,getUserById,deleteUser,updateById, getAll } from "../controllers/user.js";
import { v4 as uuidv4 } from 'uuid';
const router=express.Router();


//GET
router.get('/',getAll); 

//CREATE
// router.post('/create',(req,res)=>{
//     //console.log(req.body);
//     const user=req.body;

    
//     users.push(user);
//     res.send(`User with firstName ${user.firstName} ,lastName ${user.lastName} is added`);
// });

router.post('/create',createuser)

//Get specific user i.e :id
router.get('/:id',getUserById);


//DELETE WITH SPECIFIC ID
router.delete('/delete/:id',deleteUser);

//PATCH

router.patch('/update/:id',updateById
);

export default router;