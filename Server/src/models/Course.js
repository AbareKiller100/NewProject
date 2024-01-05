const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Course", {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      modules: {
        type: DataTypes.INTEGER,
        defaultValue:0,
        validate:{
          min:0
        }
      },
      cost: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue:0,
        validate:{
          min:0
        }
      },
      image: {
        type: DataTypes.STRING,
      }
    },
    {
      timestamps: false,
    }
  );
};
