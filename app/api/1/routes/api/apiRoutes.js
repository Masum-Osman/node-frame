const discountController = require('../../controllers/discountController')
const validateRouteAccess = require('../../../../../common/middleware/authValidation')

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
};
module.exports = {
    ridesRoute
}