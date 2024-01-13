const createNewUser= require('../../controllers/Users/createUser')

const createUserHandler= async(req, res)=>{
    try{
        const form= req.body;
        const response= await createNewUser(form);
        res.status(200).json(response);
    } catch(error){
        res.status(400).json({message: "Failed to create", error: error.message})
    }
}

module.exports= createUserHandler;