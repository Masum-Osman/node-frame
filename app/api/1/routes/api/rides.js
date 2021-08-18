const addUserController = require('../../controllers/adduserController')
const validateRouteAccess = require('../../../../../common/middleware/authValidation')

const apiVersion = '1';

var ridesRoute = function (app) {
    app.post('/api/'+apiVersion+'/get_token', [
        validateRouteAccess.isPasswordAndUserMatch,
        validateRouteAccess.login
    ]);
    
    app.post('/api/'+apiVersion+'/check_discount', [
        validateRouteAccess.validJWTForExistingPhPToken,
        addUserController.addUser
    ]);
};
module.exports = {
    ridesRoute
}
