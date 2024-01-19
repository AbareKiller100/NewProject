const {Affiliations, Instructors}= require('../../db');
// const {Op}= require('sequelize');
// const diacriticless= require('diacriticless');

const getAffiliations= async()=>{
    const affiliations= await Affiliations.findAll({
        include: {
            model: Instructors,
            attributes: ['name'],
            through:{
                attribute:[]
            }
        }
    });
    return affiliations;
}

const getAffiliationByID= async(id)=>{
    const affiliation= await Affiliations.findByPk(id, {
        include:{
            model: Instructors,
            attributes:['name'],
            through:{
                attribute:[]
            }
        }
    });

    if(!affiliation){
        throw new Error('Esta afiliación no existe');
    }

    return affiliation;
}

//Cualquier cosa, agregar getAffiliationByName

module.exports={getAffiliations, getAffiliationByID}