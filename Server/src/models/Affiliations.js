const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Affiliation',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      affiliationName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      comissionRate: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
      },
      affiliateLink: {
        type: DataTypes.STRING,
        unique: true,
      }
    },
    {
      timestamps: false
    }
  );
};
