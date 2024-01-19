const express= require('express');
const router= express.Router();
const {createAffiliationHandler, getAffiliationsHandler, getAffiliationIDHandler, updateAffiliationHandler}= require('../handlers/Affiliations/affiliationHandler')

router.post('/post', createAffiliationHandler);
router.get('/getAll', getAffiliationsHandler);
router.get('/get/:id', getAffiliationIDHandler);
router.put('/update/:id', updateAffiliationHandler);

module.exports= router