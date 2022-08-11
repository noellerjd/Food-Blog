// i'm like 90% sure that we need this
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends model {}

Review.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Review;
