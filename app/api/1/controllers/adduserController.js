const bodyParamCheck = require('../../../../libs/helper/bodyParamCheck');
const addNewUserModel = require('../model/addNewuserModel');


function addUser(req, res) 
{
    var status = true;
    var value = {} ;
    var addNewUserResponse = {};

    value.username = req.body.username;
    value.sex = req.body.sex;
    value.age = req.body.age;

    // status = bodyParamCheck.bodyValidationCheck(value);
    if(status != true)
    {
        res.json(status);
        return;
    }
    else
    {
        addNewUserModel.addNewUser(value, function (err, result) 
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
                    addNewUserResponse.response = "New User added Successfully";
                    res.json(addNewUserResponse);
                }   
                else
                {
                    addNewUserResponse.status = "failed";
                    addNewUserResponse.message = "Error saving new User";
                    addNewUserResponse.errResponse = result;

                    res.json(addNewUserResponse);
                }                 
            }
        });
    }
}

module.exports = {
    addUser
}