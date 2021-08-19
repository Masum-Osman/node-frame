const connection = require('../../../../libs/dbConnect/mysql/mysqlCon10');
const sqlQueryString = require('./sqlQueryString1');

function findDiscount(value, cb) {

    connection.ai_beesDB.getConnection(function (err,sql)  
    {
        if (err) return cb(new Error('Failed to connect mysql database '), null);
        
        sql.query(sqlQueryString.DMLQueries.GetDiscountFromProducts,[value.product_code],function (err, res) 
        {
            if(err)
            {                
                cb(err,null);
            }
            else
            {
                if(res.length == 0 || res[0].discount_amount == null || res[0].discount_amount == 0)
                {
                    sql.query(sqlQueryString.DMLQueries.GetDiscountFormParentCategory1,[value.product_code],function (err, res) 
                    {
                        if(err)
                        {                
                            cb(err,null);
                        }
                        else
                        {
                            if(res.length == 0 || res[0].discount_amount == null || res[0].discount_amount == 0)
                            {
                                sql.query(sqlQueryString.DMLQueries.GetDiscountFormParentCategory2,[value.product_code],function (err, res) 
                                {
                                    if(err)
                                    {                
                                        cb(err,null);
                                    }
                                    else
                                    {
                                        if(res.length == 0 || res[0].discount_amount == null || res[0].discount_amount == 0)
                                        {
                                            cb(null, -1)
                                        }
                                        else
                                        {
                                            cb(null, res[0].discount_amount)
                                        }
                                    }       
                                });
                            }
                            else
                            {
                                cb(null, res[0].discount_amount)
                            }
                        }       
                    });
                }
                else
                {
                    cb(null, res[0].discount_amount)
                }
            }       
        });
        sql.release();
    });
}

module.exports = {
    findDiscount
}