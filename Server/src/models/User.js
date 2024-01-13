const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName:{
        type:DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isThirdPartyAuth: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      isBanned: { 
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      }
    },
    {
      timestamps: false
    }
  );
};