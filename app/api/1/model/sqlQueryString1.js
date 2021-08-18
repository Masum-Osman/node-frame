const DMLQueries =
{
    'InsertIntoUserDetails' : `insert into user_details (username, sex, age) values (?, ? ,?);`,
    
    'InsertIntoVehicle' :   `insert into vehicles (ownername, brand, model) values (?, ? ,?);`,

    'insertIntoRidesDetails'    :   `insert into rides_details (rider_name, origin, destination, avalable_seats, vehicle_brand, vehicle_name) 
    values (?, ? , ?, ?, ?, ?);`,

    'FindRides' :   `SELECT * FROM rides_details where rider_name = ? and origin = ? and destination = ? and
    avalable_seats = ? and vehicle_brand = ?;`,

    'EndRide'   :   `update rides_details set ride_is_active = 1 where ride_id = ?;`
};





module.exports = {
    DMLQueries
};