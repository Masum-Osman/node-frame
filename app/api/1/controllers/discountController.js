const bodyParamCheck = require('../../../../libs/helper/bodyParamCheck');
const discountModel = require('../model/discountModel');


function discountCheck(req, res) 
{
    var status = true;
    var value = {} ;
    var addNewUserResponse = {};

    value.product_code = req.body.product_code;
    value.user_id = req.body.user_id;
    value.amount = req.body.amount;
    console.log(value);

    status = bodyParamCheck.bodyValidationCheck(value);
    // console.log(status);
    if(status != true)
    {
        res.json(status);
        return;
    }
    else
    {
        discountModel.findDiscount(value, function (err, result) 
        {
            console.log(result);
            if (err) 
            {
                
                res.send(err);
            }
            else 
            {

                // addNewUserResponse.status = "success";
                // addNewUserResponse.response = result;
                // res.json(addNewUserResponse);
                res.json(result);
            }
        });
    }
}

module.exports = {
    discountCheck
}