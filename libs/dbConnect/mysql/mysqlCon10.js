'user strict';
const config = require('config');

var mysql = require('mysql');
const logger = require('../../helper/logger');

const DBOptionsForTLdb = {
    host: config[2].get('MYSQL.HOST'),
    user: config[2].get('MYSQL.USER'),
    password: config[2].get('MYSQL.PASSWORD'),
    database: config[2].get('MYSQL.DATABASE'),
    dialect: config[2].get('MYSQL.DIALECT'),
    pool: {
        min: 0,
        max: 200,
    }
};

var  connectionInSUdb = mysql.createPool(
    {
        host: DBOptionsForTLdb.host,
        user: DBOptionsForTLdb.user,
        password: DBOptionsForTLdb.password,
        database: DBOptionsForTLdb.database,
        dialect: DBOptionsForTLdb.dialect,
        timezone: "Asia/Dhaka",
        define: { timestamps: false, charset: "utf8", dialectOptions: { collate: "utf8_general_ci" } },
        pool: {
            max: 100,
            min: 0,
            acquire: 30000,
            //idle: 20000,
        },
    });

    logger.info("Opening connection to MySql DB" + connectionInSUdb);

// exports.mysql = mysql;
exports.ai_beesDB = connectionInSUdb;