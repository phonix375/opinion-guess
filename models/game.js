//import models 
const { Model, DataTypes } = require('sequelize');
//db connection
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            validate:{
                notEmpty:true
            }
        },
        players:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unique:false,
        },
        done:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false

        },
        score:{
            type:DataTypes.STRING,
            allowNull:true,
            defaultValue: ''

        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
          
    }
)

module.exports = Game;
