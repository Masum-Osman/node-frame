'user strict';
const config = require('config');

// var mysql = require('mysql');
const { Pool } = require('pg')
const pg = require('pg')
const logger = require('../../helper/logger');

const DBOptionsForTLdb = {
    host: config[3].get('PGSQL.HOST'),
    user: config[3].get('PGSQL.USER'),
    password: config[3].get('PGSQL.PASSWORD'),
    database: config[3].get('PGSQL.DATABASE'),
    dialect: config[3].get('PGSQL.DIALECT'),
    pool: {
        min: 0,
        max: 200,
    }
};

var  connectionInSUdb = new Pool(
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
        },
    });

    logger.info("Opening connection to DB" + connectionInSUdb);

// exports.mysql = mysql;
// exports.pg = pg;

// connectionInSUdb.query('SELECT NOW()', (err, res) => {
//     console.log(err, res) 
//     connectionInSUdb.end() 
//   })

// console.log(connectionInSUdb);
// exports.shopUpDB = connectionInSUdb;
module.exports = {
    connectionInSUdb   
}