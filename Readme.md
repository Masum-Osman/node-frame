## Testing
<!-- changes made in antukbala branch -->

## System Diagram:
![alt text](https://github.com/Masum-Osman/node-frame/blob/master/Diagram.JPG?raw=true)

### Description:
This is a project following MVC pattern.
It has separate layer between it's route, controllers and model. 
Only Database connection is made when the model is fired.

This project has used `Express JS` as framework. `MySQL` as Database.
It has central route file which includes all the relative route in one single file.
```javascript
const ridesRoute = require('./api/rides');

module.exports.API =
{
    ridesRoute
}
```
Those route files are included in `server.js` file. While the project is on, it Bootstrapes all the routes in it.
```javascript
RoutesV1.API.ridesRoute.ridesRoute(app);
```
### Authentication:
For authentication, it has used `JWT` and the secret is a dummy text, i.e `TOP_SECRET`.
It is using a hard-coded user for now. 
```javascript
    req.body = 
    {
        userid: "1",
        userType: "admin",
        username : "Masum Osman",
        phone: "01686163323",
        team: "dev"
    };
```

### Model:
It looks through the tables if the desired product have any dicount available. It checks the property by the following code:
```javascript
res.length == 0 || res[0].discount_amount == null || res[0].discount_amount == 0
```
## Swagger:
### URL
https://app.swaggerhub.com/apis/t16643/discount/1.0.0#/Token


## Things Should do, But I couldn't because of time:

1. Promise Based Code:
    I had used callback here which leads to callback loop while searching several level of sub-categories. It can/can not be removed, but the code may look nice if I would use promise based works.
2. Traverse dynamically around product sub-category:
    You may see there remain two level of sub-categories. If we add another level, then we have to add more queries obviously. But If we could manage to build query on run time, then we may see that we had make it dynamic rather then adding queries manually.
4. Using of ORM: 
    Of curse this may look good in terms of code readability.