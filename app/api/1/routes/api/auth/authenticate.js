const jwtSecret = require('../../../../../common/config/env.config.js').jwt_secret,
jwt = require('jsonwebtoken');
const crypto = require('crypto');
const uuid = require('uuid');

exports.login = (req, res) => {
try {
        let refreshId = req.body.id + jwtSecret;
        let salt = crypto.randomBytes(16).toString('base64');
        let hash = crypto.createHmac('sha512', salt).update(refreshId).digest("base64");
        req.body.refreshKey = salt;
        let token = jwt.sign(req.body, jwtSecret);
        let b = new Buffer(hash);
        let refresh_token = b.toString('base64');
        res.status(201).send({accessToken: token, refreshToken: refresh_token});
    } catch (err) {
        res.status(500).send({errors: err});
    }
};

exports.refresh_token = (req, res) => {
    try 
    {
        
        req.body = req.jwt;
        let token = jwt.sign(req.body, jwtSecret);
        res.status(201).send({id: token});
    } catch (err) {
        res.status(500).send({errors: err});
    }
};


exports.tokenVerify = (req, res) => 
{
    try 
    {
        var valid = false;
        let userOTP = req.body.userOTP;

        if(userOTP =="" || userOTP == undefined)
        {
            res.send({valid:valid});
        }
        else
        {
          
            var secret = 'AEYjGNIRVGEtKSIarg0zCMEzOoNsK';   
            let salt = secret.toString('base64');
            let hash = crypto.createHmac('sha512', salt)
              .update(userOTP)
              .digest("base64");
            var keyHash = salt + "$" + hash;

         
          
            if(keyHash === req.body.token)
            {
                valid = true;
            }
    
            res.status(201).send({valid: valid});
        }
    } 
    catch (err) 
    {
            res.status(500).send({errors: err});
    }

};