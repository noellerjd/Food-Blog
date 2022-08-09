
const { Model, DataTypes } = require("sequelize");
const { model } = require("../config/connection");
const sequelize = require("../config/connection");

class Review extends model {}

Review.init(
 {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      BlogPost: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Review_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
 },
 {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: true,
    modelName: "Review",
  }
);

module.exports = Review;