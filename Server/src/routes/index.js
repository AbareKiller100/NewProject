const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const coursesRouter= require('./CoursesRouter')
const categoryRouter= require('./CategoryRoutes')
const instructorsRouter= require('./InstructorRoutes')
const userRouter= require('./UserRouter')
const affiliationRouter= require('./AffiliationRoutes')

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/Course', coursesRouter);
router.use('/Category', categoryRouter);
router.use('/Instructor', instructorsRouter);
router.use('/User', userRouter);
router.use('/Affiliation', affiliationRouter);

module.exports= router;