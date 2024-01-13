const {createCategory, getAllCategories}= require('../../controllers/Category/CategoryController')

const createCategoryHandler= async(req, res)=>{
    try{
        const categories= req.body;
        const response= await createCategory(categories);
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(404).json({ message: "Failed to create", error: error.message });
    }
}

const getCategoriesHandler= async (req, res)=>{
    try{
        const response= await getAllCategories();
        res.status(200).json(response)
    } catch(error){
        console.error(error);
        res.status(404).json({ message: "Failed to create", error: error.message });
    }
}
module.exports= {createCategoryHandler, getCategoriesHandler}