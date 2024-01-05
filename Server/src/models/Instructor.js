const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Instructor',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      portfolio: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        defaultValue:[]
      },
      commissionPercentage: {
        type: DataTypes.FLOAT, // Puedes ajustar el tipo de dato según tus necesidades
        defaultValue: 10, // Ejemplo: 10% de comisión por defecto
      },
      performanceStatistics: {
        type: DataTypes.JSONB,
        defaultValue: {}
      },
      paymentHistory: {
        type: DataTypes.JSONB,
        defaultValue: []
      },
      accountStatus: {
        type: DataTypes.JSONB,
        defaultValue: {}
      },
      registrationDate: {
        type: DataTypes.DATEONLY
      }
    },
    {
      timestamps: false
    }
  );
};
