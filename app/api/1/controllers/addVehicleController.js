const bodyParamCheck = require('../../../../libs/helper/bodyParamCheck');
const addVehicleModel = require('../model/addVehicleModel');


function addVehicle(req, res) 
{
    var status ;
    var value = {} ;
    var addNewVResponse = {};

    value.ownername = req.body.ownername;
    value.brand = req.body.brand;
    value.model = req.body.model;

    status = bodyParamCheck.bodyValidationCheck(value);
    if(status != true)
    {
        res.send(status);
        return;
    }
    else
    {
        addVehicleModel.addVehicle(value, function (err, result) 
        {

            if (err) 
            {
                res.send(err);
            }
            else 
            {
                if(result.affectedRows == 1)
                {
                    addNewVResponse.status = "success";
                    addNewVResponse.response = "New Vehicle added Successfully";
                    res.json(addNewVResponse);
                }   
                else
                {
                    addNewVResponse.status = "failed";
                    addNewVResponse.message = "Error saving new Vehicle";
                    addNewVResponse.errResponse = result;

                    res.json(addNewVResponse);
                }                 
            }
        });
    }
}

module.exports = {
    addVehicle
}