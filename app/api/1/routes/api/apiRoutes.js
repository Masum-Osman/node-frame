const discountController = require('../../controllers/discountController')
const testController = require('../../controllers/testController')
const validateRouteAccess = require('../../../../../common/middleware/authValidation');
const testQuery = require('../../model/testModel');

const apiVersion = '1';

var ridesRoute = function (app) {
    app.get('/api/' + apiVersion + '/get_token', [
        validateRouteAccess.isPasswordAndUserMatch,
        validateRouteAccess.login
    ]);

    app.post('/api/' + apiVersion + '/check_discount', [
        validateRouteAccess.validJWTForExistingPhPToken,
        discountController.discountCheck
    ]);

    app.get('/api/' + apiVersion + '/products', (req, res) => {
        // test
        // let temp = testQuery();
        // res.json(temp);
        // // console.log(temp);

        // res.send(temp);
        // testController
    });

};
module.exports = {
    ridesRoute
}
