const {Instructors, Users}= require('../../db');

const emailAlreadyExist= async (email)=>{
    const instructor= await Instructors.findOne({where: {email}});
    const user= await Users.findOne({where: {email}});
    if(instructor || user){
        return true;
    }

    return false;
}

const createNewUser= async(form)=>{
    const {firstName, lastName, email, password, image, registrationDate}= form;
    
    if(!firstName || !lastName || !email){
        throw new Error('Faltan datos requeridos');
    }

    const emailTaken= await emailAlreadyExist(email)

    const newUser={}

    if(emailTaken){
        throw new Error('Este email ya está registrado')
    }

    if(form.password && form.image){
        newUser= {firstName, lastName, email, password, image, registrationDate};
    } else if(!form.password && form.image){
        newUser= {firstName, lastName, email, image, registrationDate};
    } else if(form.password && !form.image){
        newUser= {firstName, lastName, email, password, registrationDate};
    } else{
        newUser= {firstName, lastName, email, registrationDate};
    }

    const createUser= await Users.create(newUser);

    return createUser;
}

module.exports= createNewUser;