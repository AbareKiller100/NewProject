const express= require('express');
const router= express.Router();
const createInstructorHandler= require('../handlers/Instructors/createInstructorHandler')

router.post('/post', createInstructorHandler);

module.exports= router;