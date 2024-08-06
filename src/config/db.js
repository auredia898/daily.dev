const Sequelize = require ('sequelize')
const dotenv = require('dotenv')

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: true
    }
});

module.exports = sequelize;
