const {Model, DataTypes} = require("sequelize")


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
        post_body: {
            type: DataTypes.STRING, 
            allowNull: false,
    }
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "article"
    }
);

module.exports = Article;