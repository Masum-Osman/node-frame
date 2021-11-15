const connection = require('../../../../libs/dbConnect/mysql/mysqlCon10');
const sqlQueryString = require('./sqlQueryString1');

function findServices(cb) {

    connection.ai_beesDB.getConnection(function (err,sql)  
    {
        if (err) return cb(new Error('Failed to connect mysql database '), null);
        
        sql.query(sqlQueryString.DMLQueries.GetAllServices,function (err, res) 
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
    findServices
}