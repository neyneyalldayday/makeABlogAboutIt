const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection')


class User extends Model {
    peepPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}


User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                isEmail: true,
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newDudeData) =>{
            newDudeData.password = await bcrypt.hash(newDudeData.password, 10);
            return newDudeData;
            },
            beforeUpdate: async (updatedDudeData)  => {
                updatedDudeData.password = await bcrypt.hash(updatedDudeData.password, 10);
                return updatedDudeData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored:true,
        modelName: 'user',
    }
);

module.exports = User;

