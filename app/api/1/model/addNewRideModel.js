const connection = require('../../../../libs/dbConnect/mysql/mysqlCon10');
const sqlQueryString = require('./sqlQueryString1');

function addNewRide(value, cb) {
    connection.shopUpDB.getConnection(function (err,sql)  
    {
        if (err) return cb(new Error('Failed to connect mysql database '), null);

        sql.query(sqlQueryString.DMLQueries.FindRides,[value.rider_name, value.vehicle_brand, value.vehicle_name],function (err, res) 
        {
            if(err)
            {                
                cb(err,null);
            }
            else
            {
                if(res.length == 0)
                {
                    sql.query(sqlQueryString.DMLQueries.insertIntoRidesDetails,[value.rider_name, value.origin, 
                        value.destination, value.avalable_seats, value.vehicle_brand, value.vehicle_name],function (err, res) 
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
                }
            }       
        });
        sql.release();
    });
}

module.exports = {
    addNewRide
}