let users=[{
    Id:1,
    firstName:"Jethalal",
    lastName:"Gada",
    food:"Jaleb Fafda",
    age:50
},
{
    Id:2,
    firstName:"Daya",
    lastName:"Gada",
    food:"dal dhokli",
    age:45
},
{
    Id:3,
    firstName:"Babita",
    lastName:"Iyer",
    food:"RasGulla",
    age:40
},
{
    Id:4,
    firstName:"Krishnan",
    lastName:"Iyer",
    food:"Idli Smabhar",
    age:46
}
]

//CREATE i.e POST
export const createuser=(req,res)=>{
    //console.log(req.body);
    const user=req.body;

    
    users.push(user);
    res.send(`User with firstName ${user.firstName} ,lastName ${user.lastName} is added`);
}

export const getAll=(req,res)=>{
    res.send(users);
}
//READ
//GET BY ID
export const getUserById=(req,res)=>{
    const {id}=req.params;
   const userfound= users.find((user)=>user.Id == id);
   console.log(userfound)
   res.send(userfound)
}

//DELETE BY ID
export const deleteUser=(req,res)=>{
    const {id}=req.params;
   users=users.filter((user)=>user.Id !=id);
   res.send(`user deleted with id ${id}`);
}

//PATCH i.e UPDATEBYID
export const updateById=(req,res)=>{
    const {id}=req.params;
    const user=users.find((user)=>user.Id ==id);
 
    if(!user){
        return  res.status("404").send({message:'No User found'})
}
else{
    const {firstName,lastName,food,age}=req.body;
    if(firstName)
    {
        user.firstName=firstName;
    }
    if(lastName)
    {
        user.lastName=lastName;
    }
    if(age)
    {
        user.age=age;
    }
    if(food)
    {
        user.food=food;
    }
    res.send(`User with {$id} is Updated`);

}
 }