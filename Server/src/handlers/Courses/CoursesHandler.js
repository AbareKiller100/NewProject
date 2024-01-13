const createNewCourse= require('../../controllers/Courses/CreateCourse');
const {getAllCourses, getCourseByID, getCourseByTitle}= require('../../controllers/Courses/getCourses');


const createCourseHandler= async (req, res)=>{
    try{
        const form = req.body;
        const response= await createNewCourse(form);
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(404).json({ message: "Failed to create", error: error.message });
    }
}

const getCoursesHandler= async (req, res)=>{
    try{
        const response= await getAllCourses();
        res.status(200).json(response);
    } catch(error){
        console.error(error);
        res.status(404).json({ message: "Failed to create", error: error.message });
    }
}

const getCourseByID= async (req, res)=>{
    try{
        const {id}= req.params;
        const response= await getCourseByID(id);
        res.status(200).json(response);
    } catch(error){
        console.error(error);
        res.status(404).json({ message: "Failed to create", error: error.message });
    }
}

const getCourseByTitle= async (req, res)=>{
    try{
        const {name}= req.query;
        const response= await getCourseByTitle(name);
        res.status(200).json(response);
    } catch(error){
        console.error(error);
        res.status(404).json({ message: "Failed to create", error: error.message });
    }
}

module.exports= {createCourseHandler, getCoursesHandler, getCourseByID, getCourseByTitle}