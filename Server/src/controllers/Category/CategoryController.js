const { Category } = require("../../db");

const createCategory= async(categories)=>{

    const createdCategories = await Promise.all(
        categories.map(async (category) => {
          return await Category.create({ name: category });
        })
    );

    return createdCategories;
}

const getAllCategories= async ()=>{
    const categories= await Category.findAll();

    return categories;
}

module.exports= {createCategory, getAllCategories};