//import models 
const { Model, DataTypes } = require('sequelize');
//db connection
const sequelize = require('../config/connection');

class Question extends Model {}

Question.init(
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
        question:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        answers:{
            type:DataTypes.TEXT,
            allowNull:false,

        },
        scores:{
            type:DataTypes.TEXT,
            allowNull:false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'question',
          
    }
)

module.exports = Question;

