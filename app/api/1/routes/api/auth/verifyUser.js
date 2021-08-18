const UserModel = require('../../../../model/17/Security/userModel');
const crypto = require('crypto');

/*
exports.hasAuthValidFields = (req, res, next) => {
    let errors = [];

    if (req.body)
    {
        if (!req.body.phone) {
            errors.push('Missing email field');
        }
        
        if (!req.body.username) {
            errors.push('Missing password field');
        }
        
        if (errors.length)
        {
            return res.status(400).send({errors: errors.join(',')});
        }
        else 
        {
            return next();
        }
    } else 
    {
        return res.status(400).send({errors: 'Missing user phone'});
    }
};
*/

exports.hasAuthValidFields = (req, res, next) => {
        
    let errors = [];

    if (req.body)
    {
        if (!req.body.userId) {
            errors.push('Missing userId field');
        }
        if (errors.length)
        {
            return res.status(400).send({errors: errors.join(',')});
        }
        else 
        {
            return next();
        }
    } else 
    {
        return res.status(400).send({errors: 'Missing email and password fields'});
    }
};


exports.isPasswordAndUserMatch = (req, res, next) => 
{
    UserModel.findByuserID(req.body.userId, function(err, user)
    {
        if(user[0] == null || user[0] == undefined)
        {
            res.status(404).send({});
        }
        else
        {            
            if(user[0])
            {                
                let passwordFields = user[0].id;

                console.log(req.body.userId == passwordFields);
                
                //let salt = passwordFields[0];
                //let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
                // id, email, username, phone, team

                if (req.body.userId == passwordFields) {
                    req.body = 
                    {
                        userid: user[0].id,
                        userType: "admin",
                        username : user[0].username,
                        phone: user[0].phone,
                        team: user[0].team
                    };
                    return next();
                } 
                else 
                {
                    return res.status(400).send({errors: ['Invalid user details']});
                }
            }
            else
            {                
                return res.status(400).send({errors: ['Invalid user details']});
            }
        }
    });
};


/*
exports.isPasswordAndUserMatch = (req, res, next) => 
{
    UserModel.findByEmail(req.body.phone, function(err, user)
     {
        if(!user[0])
        {
            res.status(404).send({});
        }
        else
        {
            let passwordFields = user[0].username.split('$');
            let salt = passwordFields[0];
            console.log(passwordFields, salt, req.body.username);
            //let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
            if (req.body.username === passwordFields[0]) {
                req.body = {
                    id: user[0].id,
                    phone: user[0].phone,
                    //permissionLevel: user[0].permissionLevel,
                    provider: 'email',
                    username: user[0].username,
                };
                return next();
            } else 
            {
                return res.status(400).send({errors: ['Invalid e-mail or password']});
            }
        }
    });
};
*/
