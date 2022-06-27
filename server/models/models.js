const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id:         {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:      {type: DataTypes.STRING, unique: true,},
    password:   {type: DataTypes.STRING},
    role:       {type: DataTypes.STRING, defaultValue: "USER"},
})

const Device = sequelize.define('device', {
    id:             {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:           {type: DataTypes.STRING, unique: true, allowNull: false},
    price:          {type: DataTypes.INTEGER, allowNull: false},
    img:            {type: DataTypes.STRING, allowNull: false},
    description:    {type: DataTypes.STRING, allowNull: false}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

Type.hasMany(Device)
Device.belongsTo(Type)

module.exports = {
    User,
    Device,
    Type,
}





