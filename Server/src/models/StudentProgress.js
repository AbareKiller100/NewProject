const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'StudentProgress',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      finishDate: {
        type: DataTypes.DATEONLY,
        defaultValue: null,
        allowNull: false
      },
      completedTasks: {
        type: DataTypes.JSONB,
        defaultValue: [],
        allowNull: false
      },
      examsPerformed: {
        type: DataTypes.JSONB,
        defaultValue: [],
        allowNull: false
      },

    }
  );
};
