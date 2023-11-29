const { Model , DataTypes } = require("sequelize")

class Troll extends Model{}

Troll.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        troll_body:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'troll',
    }
 
);

module.exports = Troll;