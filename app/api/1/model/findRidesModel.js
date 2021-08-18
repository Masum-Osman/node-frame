const connection = require('../../../../libs/dbConnect/mysql/mysqlCon10');
const sqlQueryString = require('./sqlQueryString1');

function findRides(value, cb) {
    connection.shopUpDB.getConnection(function (err,sql)  
    {
        if (err) return cb(new Error('Failed to connect mysql database '), null);
        
        sql.query(sqlQueryString.DMLQueries.EndRide,[value.ride_id],function (err, res) 
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
    findRides
}