const createNewInstructor= require('../../controllers/Instructors/CreateInstructor')

const createInstructorHandler= async (req, res)=>{
    try{
        const form = req.body;
        const response= await createNewInstructor(form);
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(404).json({ message: "Failed to create", error: error.message });
    }
}

module.exports= createInstructorHandler;