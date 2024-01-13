const {Course, Category} = require('../../db');
const { Op } = require('sequelize');
const diacriticless = require("diacriticless");

const getAllCourses= async ()=>{
    const allCourses= await Course.findAll({
        include: {
            model: Category,
            attributes: ['name'],
            through: {
                attribute: []
            }
        }
    })

    return allCourses;
}
 
const getCourseByID= async (id)=>{
    const course= await Course.findByPk(id);

    return course;
}

const getCourseByTitle= async (title)=>{

    const courses=[];

    const titleSinTilde= diacriticless(title);

    const coursesDB= await Course.findAll({
        where: {
            title:{
                [Op.iLike]:`%${title}%`
            }
        },
        include: {
            model: Category,
            attributes: ['name'],
            through: {
                attribute: []
            }
        }
    })

    if(!coursesDB){
        coursesDB= await Course.findAll();

        const coursesSinTilde= coursesDB.map((course)=> course.dataValues.secondName=diacriticless(course.dataValues.title))

        courses= coursesSinTilde.filter((course)=> course.dataValues.secondName.includes(titleSinTilde))
    }

    return courses;
}

module.exports= {getAllCourses, getCourseByID, getCourseByTitle};