const express= require('express');
const router= express.Router();
const {createCategoryHandler, getCategoriesHandler}= require('../handlers/Category/CategoryHandler')

router.post('/post', createCategoryHandler);
router.get('/getAll', getCategoriesHandler);

module.exports= router;