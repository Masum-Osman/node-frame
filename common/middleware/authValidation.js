const jwt = require('jsonwebtoken'),
crypto = require('crypto');

exports.verifyRefreshBodyField = (req, res, next) => {
    if (req.body && req.body.refresh_token) {
        return next();
    } else {
        return res.status(400).send({error: 'need to pass refresh_token field'});
    }
};

exports.validRefreshNeeded = (req, res, next) => {
    let b = new Buffer(req.body.refresh_token, 'base64');
    let refresh_token = b.toString();
    let hash = crypto.createHmac('sha512', req.jwt.refreshKey).update(req.jwt.userId + secret).digest("base64");
    if (hash === refresh_token) {
        req.body = req.jwt;
        return next();
    } else {
        return res.status(400).send({error: 'Invalid refresh token'});
    }
};


exports.validJWTNeeded = (req, res, next) =>
{
    if (req.headers['authorization']) 
    {
        try 
        {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                req.jwt = jwt.verify(authorization[1], secret);
                return next();
            }

        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }
};

exports.validJWTForExistingPhPToken = (req, res, next) =>
{
    const secret = 'TOP_SECRET';

    if (req.headers['authorization'])
    {
        try
        {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                req.jwt = jwt.verify(authorization[1], secret);
                return next();
            }
        } catch (err) {
            return res.status(403).send("Token authorization failled");
        }
    } else {
        return res.status(401).send("Token Not Found");
    }
};


exports.isPasswordAndUserMatch = (req, res, next) => 
{
    req.body = 
    {
        userid: "1",
        userType: "admin",
        username : "Masum Osman",
        phone: "01686163323",
        team: "dev"
    };
    return next();
};


exports.login = (req, res) => {
    
    var jwtSecret = "TOP_SECRET";

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