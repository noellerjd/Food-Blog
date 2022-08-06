// Fair Warning: I'm not sure if this correctly fits into the project the way I think it does

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BlogPost extends model {}

blogPost.init(
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
    post_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "blogPost",
  }
);

module.exports = BlogPost;
