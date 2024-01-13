const loginUser= require('../../controllers/Users/loginUser');

const loginUserHandler= async(req, res)=>{
    try{
        const data= req.body;
        const response= await loginUser(data);
        res.status(200).json({
            message: "Inicio de sesión exitoso",
            user: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            }
        })
    } catch(error){
        res.status(401).json({ message: "Credenciales inválidas" });
    }
}

module.exports= loginUserHandler;