const serviceModel = require('../model/serviceModel');

var service_obj = {}

function services(req, res) 
{
    serviceModel.findServices(function (err, result) 
    {

        if (err) 
        {
            res.send(err);
        }
        else 
        {
            service_obj.status = "success";
            service_obj.response = result;
            res.json(service_obj);        
        }
    });
}

module.exports = {
    services
}