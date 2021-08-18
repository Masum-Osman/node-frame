const addUserController = require('../../controllers/adduserController')

const apiVersion = '1';

var ridesRoute = function (app) {

    app.post('/api/'+apiVersion+'/adduser', [
        addUserController.addUser
    ]);

};
module.exports = {
    ridesRoute
}
