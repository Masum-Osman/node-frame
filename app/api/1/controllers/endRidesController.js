const bodyParamCheck = require('../../../../libs/helper/bodyParamCheck');
const endRideModel = require('../model/endRideModel');


function editRide(req, res) 
{
    var status ;
    var value = {} ;
    var addNewUserResponse = {};

    /*
    it would be much convenient to use IDs instead of Names (as string).

    But elemenating the IDs as per the test cases wirtten on the Assignment doc.
    Because the tester could not insert IDs in names because there is no frontend to handle this part.
    */

    value.ride_id = req.body.ride_id

    status = bodyParamCheck.bodyValidationCheck(value);

    if(status != true)
    {
        res.send(status);
        return;
    }
    else
    {
        endRideModel.endRides(value, function (err, result) 
        {

            if (err) 
            {
                res.send(err);
            }
            else 
            {
                if(result.affectedRows == 1)
                {
                    addNewUserResponse.status = "success";
                    addNewUserResponse.response = "Rided updated";
                    res.json(addNewUserResponse);
                }   
                else
                {
                    addNewUserResponse.status = "failed";
                    addNewUserResponse.message = "Rided could not updated";
                    addNewUserResponse.errResponse = result;

                    res.json(addNewUserResponse);
                }                 
            }
        });
    }
}

module.exports = {
    editRide
}