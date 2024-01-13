const {Instructors, Users}= require('../../db');

const emailAlreadyExist= async (email)=>{
    const instructor= await Instructors.findOne({where: {email}});
    const user= await Users.findOne({where: {email}});
    if(instructor || user){
        return true;
    }

    return false;
}

const createNewInstructor= async(form)=>{
    const {name, email, password, image, portfolio, commissionPercentage, registrationDate}= form;
    
    if(!name || !email || !password || !portfolio.length || !commissionPercentage || !image){
        throw new Error('Faltan datos requeridos');
    }

    const emailTaken= await emailAlreadyExist(email)

    if(emailTaken){
        throw new Error('Este email ya está registrado')
    }

    const newInstructor= {name, email, password, image, portfolio, commissionPercentage, registrationDate};

    const createInstructor= await Instructors.create(newInstructor);

    return createInstructor;
}

module.exports= createNewInstructor;