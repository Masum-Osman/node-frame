const DMLQueries =
{
    'GetDiscountFromProducts' : `select discount_amount from products where product_code = ?;`,
    
    'GetDiscountFormParentCategory1' :   `select parent_category_1.discount_amount from parent_category_1 
                            inner join products on products.parent_category_id = parent_category_1.category_id
                            where products.product_code = ?;`,

    'GetDiscountFormParentCategory2'    :   ` select parent_category_2.discount_amount from parent_category_1 
                            inner join products on products.parent_category_id = parent_category_1.category_id
                            inner join parent_category_2 on parent_category_1.parent_category_id = parent_category_2.category_id
                            where products.product_code = ?;`,


    'GetAllServices'    :   `select * from additional_service;`
};





module.exports = {
    DMLQueries
};