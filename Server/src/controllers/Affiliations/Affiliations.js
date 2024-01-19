const {Affiliations, Instructors}= require('../../db')

const createAffiliation= async(form)=>{
    const {affiliationName, description, comissionRate, affiliateLink}= form;

    if(!affiliationName || !description || !password || !comissionRate || !affiliateLink){
        throw new Error('Faltan datos requeridos');
    }

    const newAffiliation= await Affiliations.create(form);

    if(form.instructor){
        const instructor= await Instructors.findOne({where: {email: form.instructor}});
        if(!instructor){
            throw new Error('Este instructor no está registrado')
        } else{
            await newAffiliation.setInstructor(instructor)
        }
    }

    return newAffiliation;
}

const updateAffiliation= async(id, form)=>{
    const {affiliationName, description, comissionRate, affiliateLink}= form;

    const affiliation= await Affiliations.findByPk(id);

    if(!affiliation){
        throw new Error('Esta afiliación no existe');
    }

    await affiliation.update({
        affiliationName, description, comissionRate, affiliateLink
    })  

    return affiliation;
}

module.exports= {createAffiliation, updateAffiliation};