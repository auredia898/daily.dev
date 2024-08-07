const DataTypes = require ('sequelize')
const sequelize = require('../config/db');
const typeSquad = require('../features/typeSquad/typeSquad.Model')
const squad = require('../features/squad/squad.Model')


//relation one-to-many entre typeSquad et squad
typeSquad.hasMany(squad, {
    foreignKey: 'typeSquadId',
    onDelete: 'CASCADE',
  });
  squad.belongsTo(typeSquad, {
    foreignKey: 'typeSquadId',
  });

sequelize.sync({ alter: true }).then(() => {
console.log('Database & tables created!');
});

module.exports =  {typeSquad , squad};