const {Model, DataTypes} = require("sequelize")
const sequelize = require('../config/connection')

class Article extends Model{}


Article.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,            
        },
        article_body: {
            type: DataTypes.TEXT, 
            allowNull: false,
    },
},
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "article"
    }
);

module.exports = Article;