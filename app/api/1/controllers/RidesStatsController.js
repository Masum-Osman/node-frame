const bodyParamCheck = require('../../../../libs/helper/bodyParamCheck');
const addNewRideModel = require('../model/addNewRideModel');


function ridesStats(req, res) 
{
    var status ;
    var value = {} ;
    var addNewUserResponse = {};

    /*
    it would be much convenient to use IDs instead of Names (as string).

    But elemenating the IDs as per the test cases wirtten on the Assignment doc.
    Because the tester could not insert IDs in names because there is no frontend to handle this part.
    */

    value.rider_name = req.body.rider_name;

    status = bodyParamCheck.bodyValidationCheck(value);

    if(status != true)
    {
        res.send(status);
        return;
    }
    else
    {
        addNewRideModel.addNewRide(value, function (err, result) 
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
                    addNewUserResponse.response = "New Vehicle added Successfully";
                    res.json(addNewUserResponse);
                }   
                else
                {
                    addNewUserResponse.status = "failed";
                    addNewUserResponse.message = "Error saving new Vehicle";
                    addNewUserResponse.errResponse = result;

                    res.json(addNewUserResponse);
                }                 
            }
        });
    }
}

module.exports = {
    ridesStats
}