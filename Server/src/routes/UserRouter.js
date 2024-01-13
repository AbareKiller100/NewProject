const express= require('express');
const router= express.Router();
const createUserHandler= require('../handlers/Users/CreateUserHandler');
const loginUserHandler=require('../handlers/Users/loginUserHandler')

router.post('/post', createUserHandler);
router.post('/login', loginUserHandler)

module.exports= router;