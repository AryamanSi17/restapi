import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router=express.Router();
let users=[
]
//homepage in here is default /users
router.get('/',function(req,res){
    res.send(users);
});
router.post('/',function(req,res){
    console.log("Fuck you");
    const user=req.body;
    const userId=uuidv4();
    const userWithId={...user,id:userId}

    users.push(userWithId);
    res.send(`User with the ${user.firstname} added to the database`);
    
})
router.get('/:id',function(req,res){
    const {id}=req.params;
    const foundUser=users.find((user)=>user.id===id);
    res.send(foundUser);
});
router.delete('/:id',function(req,res){
    const {id}=req.params;

    users=users.filter((user)=> user.id ===! id)//filter removes when false is the condition
    res.send("User with that particular id deleted");
});
router.patch('/:id',function(req,res){
    const {id}=req.params;
    const {firstName ,lastName, age}=req.body;
    const user=users.find((user)=>user.id===id);
    if(firstName){
        user.firstName=firstName;
    }
    if(lastName){
        user.lastName=lastName;
    }
    if(age){
        user.age=age;
    }
res.send("Updated");   

})
export default router;