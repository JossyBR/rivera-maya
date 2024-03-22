const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "propiedad",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripción: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maxHuespedes: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      frezzeTableName: true,
    }
  );
};



