const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// question model
class Question extends Model {}


// create fields/columns for question model
Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer_score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'question'
    }
);


module.exports = Question;
