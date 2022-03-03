create table products(
	product_code int,
	discount_amount int,
	parent_category_id int
);

insert into products(product_code, discount_amount, parent_category_id) values (1, 1005, 3);
insert into products(product_code, discount_amount, parent_category_id) values (2, 3000, 2);
insert into products(product_code, discount_amount, parent_category_id) values (3, 2015, 1);
insert into products(product_code, discount_amount, parent_category_id) values (4, 4000, 1);

parent_category_1 -> category_id, 

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
