require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Courses, Category, Instructors, Affiliations, Users, StudentProgress, Messages, Reviews, Notifications, PaymentTransaction } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Category.belongsToMany(Courses, { through: 'Course_Category' });
Courses.belongsTo(Category);

Instructors.hasMany(Courses);
Courses.belongsTo(Instructors);

Instructors.hasOne(Affiliations);
Affiliations.belongsTo(Instructors);

Users.belongsToMany(Courses, { through: 'User_Course' });
Courses.belongsToMany(Users, { through: 'User_Course' });

Users.hasMany(StudentProgress);
StudentProgress.belongsTo(Users);

Courses.hasMany(StudentProgress);
StudentProgress.belongsTo(Courses);

Users.hasMany(Messages);
Messages.belongsTo(Users)

Instructors.hasMany(Messages);
Messages.belongsTo(Instructors);

Users.hasMany(Reviews);
Reviews.belongsTo(Users);

Notifications.belongsTo(Courses);
Courses.hasMany(Notifications);

Instructors.hasMany(PaymentTransaction);
PaymentTransaction.belongsTo(Instructors);

Users.hasMany(PaymentTransaction);
PaymentTransaction.belongsTo(Users);

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
