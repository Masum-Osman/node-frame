const connection = require('../../../../libs/dbConnect/mysql/mysqlCon10');
const sqlQueryString = require('./sqlQueryString1');

function testQuery() {
    console.log('testQuery');
    connection.ai_beesDB.getConnection(function (err, sql) {
        sql.query(sqlQueryString.DMLQueries.myQuery, function (err, res) {
            // console.log(err);
            console.log(res);
        });
        sql.release();
    });
}

module.exports = testQuery;
