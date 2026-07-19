const { Sequelize } = require("sequelize");

const connectionString = process.env.DATABASE_URL;

console.log("DATABASE_URL exists:", !!connectionString);

const sequelize = new Sequelize(connectionString || "", {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

module.exports = sequelize;