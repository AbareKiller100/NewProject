const express= require('express');
const router= express.Router();
const {createCourseHandler, getCoursesHandler, getCourseByID, getCourseByTitle}= require('../handlers/Courses/CoursesHandler');

router.post('/post', createCourseHandler);
router.get('/getAll', getCoursesHandler);
router.get('/:id', getCourseByID);
router.get('/title', getCourseByTitle);

module.exports= router;