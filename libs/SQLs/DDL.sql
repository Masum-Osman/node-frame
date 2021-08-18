CREATE TABLE user_details (
    user_id int,
    username varchar(255),
    sex varchar(255),
    age varchar(255)
);

CREATE TABLE vehicles (
    vehicle_id int,
    ownername varchar(255),
    owner_id int,
    brand varchar(255),
    model varchar(255)
);


CREATE TABLE rides_details (
    ride_id int,
    rider_name varchar(255),
    origin varchar(255),
    destination varchar(255),
    avalable_seats int,
    vehicle_brand varchar(255),
    vehicle_name varchar(255),
    vehicle_id int,
    ride_is_active int
);

