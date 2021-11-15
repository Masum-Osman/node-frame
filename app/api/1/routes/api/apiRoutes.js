const discountController = require('../../controllers/discountController')
const validateRouteAccess = require('../../../../../common/middleware/authValidation')
const serviceController = require('../../controllers/serviceController')

const apiVersion = '1';

var ridesRoute = function (app) {
    app.get('/api/'+apiVersion+'/get_token', [
        validateRouteAccess.isPasswordAndUserMatch,
        validateRouteAccess.login
    ]);

    app.post('/api/'+apiVersion+'/check_discount', [
        validateRouteAccess.validJWTForExistingPhPToken,
        discountController.discountCheck
    ]);

    app.get('/api/'+apiVersion+'/services', [
        serviceController.services
    ]);
};
module.exports = {
    ridesRoute
}