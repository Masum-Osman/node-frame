const connection = require('../../../../libs/dbConnect/mysql/mysqlCon10');
const sqlQueryString = require('./sqlQueryString1');

function addNewUser(value, cb) {
    connection.connectionInSUdb(function (err,sql)  
    {
        if (err) return cb(new Error('Failed to connect mysql database '), null);
        
        sql.query(sqlQueryString.DMLQueries.InsertIntoUserDetails,[value.username, value.sex, 
            value.age],function (err, res) 
        {
            if(err)
            {                
                cb(err,null);
            }
            else
            {
                cb(null, res)
            }       
        });
        sql.release();
    });
}

module.exports = {
    addNewUser
}