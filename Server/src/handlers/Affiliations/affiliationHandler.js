const {createAffiliation, updateAffiliation}= require('../../controllers/Affiliations/Affiliations');
const {getAffiliations, getAffiliationByID}= require('../../controllers/Affiliations/getAffiliations')

const createAffiliationHandler= async(req, res)=>{
    try{
        const form= req.body;
        const response= await createAffiliation(form);
        res.status(200).json(response)
    } catch(error){
        res.status(400).json({message: "Failed to create", error: error.message})
        
    }
}

const getAffiliationsHandler= async(req, res)=>{
    try{
        const response= await getAffiliations();
        res.status(200).json(response)
    } catch(error){
        res.status(400).json({message: "Failed to create", error: error.message})
    }
}

const getAffiliationIDHandler= async(req, res)=>{
    try{
        const {id}= req.params
        const response= await getAffiliationByID(id);
        res.status(200).json(response)
    } catch(error){
        res.status(400).json({message: "Failed to create", error: error.message})
    }
}

const updateAffiliationHandler= async(req, res)=>{
    try{
        const {id}= req.params
        const form= req.body;
        const response= await updateAffiliation(id, form);
        res.status(200).json(response)
    } catch(error){
        res.status(500).json({message: "Failed to create", error: error.message})
    }
}

module.exports= {createAffiliationHandler, getAffiliationsHandler, getAffiliationIDHandler, updateAffiliationHandler};