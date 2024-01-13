const {Course, Category, Instructor} = require('../../db');

const createNewCourse= async (form)=>{
    const {title, description, modules, cost, image }= form;

    if(!title || !description || !modules || !cost || !image){
        throw new Error('Faltan datos requeridos');
    }

    const newCourse= {title, description, modules, cost, image};

    const createCourse= await Course.create(newCourse);
    
    if(form.category){
        const category = await Category.findOne({ where: { name: form.category } });
        if(!category){
            throw new Error('Esta categoría de curso no existe')
        } else{
            await createCourse.setCategory(category)
        }
    }

    if(form.instructor){
        const instructor = await Instructor.findByPk(form.instructor);
        if(!instructor){
            throw new Error('Este instructor no está registrado')
        } else{
            await createCourse.setInstructor(instructor)
        }
    }

    return createCourse;
}

module.exports= createNewCourse;