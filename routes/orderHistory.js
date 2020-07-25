const express = require('express');
const router = express.Router();
const getOrderHistoryList = require('../actions/orderHistory');


/**
 * @api {get} /product/:orderID? Get order history information for a customer
 * 
 * @apiName OrderHistory
 * @apiGroup OrdersHistory
 * 
 * @apiParam {Int} orderID Orders's unique id
 * 
 * @apiSuccess {object[]} Array of orders information objects
 * 
 * @apiSuccessExample Response:
 *        [
 *           {
 *               "orderDate": "1998-01-21T00:00:00.000Z",
 *               "requiredDate": "1998-02-18T00:00:00.000Z",
 *               "shipDate": "1998-01-26T00:00:00.000Z",
 *               "productList": [
 *                   {
 *                       "productName": "Manjimup Dried Apples",
 *                       "quantity": 4,
 *                       "productPrice": "212.00"
 *                   }
 *               ],
 *               "totalAmount": "212.00"
 *           },
 *           {
 *               "orderDate": "1998-01-05T00:00:00.000Z",
 *               "requiredDate": "1998-02-02T00:00:00.000Z",
 *               "shipDate": "1998-01-14T00:00:00.000Z",
 *               "productList": [
 *                   {
 *                       "productName": "Jack's New England Clam Chowder",
 *                       "quantity": 20,
 *                       "productPrice": "193.00"
 *                   },
 *                   {
 *                       "productName": "Ipoh Coffee",
 *                       "quantity": 20,
 *                       "productPrice": "920.00"
 *                   },
 *                   {
 *                       "productName": "Chocolade",
 *                       "quantity": 8,
 *                       "productPrice": "102.00"
 *                   },
 *                   {
 *                       "productName": "Sirop d'érable",
 *                       "quantity": 30,
 *                       "productPrice": "855.00"
 *                   }
 *               ],
 *               "totalAmount": "2282.00"
 *           },
 *           {
 *               "orderDate": "1997-12-31T00:00:00.000Z",
 *               "requiredDate": "1998-01-28T00:00:00.000Z",
 *               "shipDate": "1998-01-05T00:00:00.000Z",
 *               "productList": [
 *                   {
 *                       "productName": "Chang",
 *                       "quantity": 20,
 *                       "productPrice": "380.00"
 *                   },
 *                   {
 *                       "productName": "Louisiana Fiery Hot Pepper Sauce",
 *                       "quantity": 2,
 *                       "productPrice": "42.10"
 *                   },
 *                   {
 *                       "productName": "Longlife Tofu",
 *                       "quantity": 15,
 *                       "productPrice": "150.00"
 *                   }
 *               ],
 *               "totalAmount": "2854.10"
 *           },
 *           {
 *               "orderDate": "1997-03-18T00:00:00.000Z",
 *               "requiredDate": "1997-04-01T00:00:00.000Z",
 *               "shipDate": "1997-03-26T00:00:00.000Z",
 *               "productList": [
 *                   {
 *                       "productName": "Ikura",
 *                       "quantity": 20,
 *                       "productPrice": "496.00"
 *                   }
 *               ],
 *               "totalAmount": "3350.10"
 *           },
 *           {
 *               "orderDate": "1997-02-27T00:00:00.000Z",
 *               "requiredDate": "1997-03-27T00:00:00.000Z",
 *               "shipDate": "1997-02-28T00:00:00.000Z",
 *               "productList": [
 *                   {
 *                       "productName": "Uncle Bob's Organic Dried Pears",
 *                       "quantity": 16,
 *                       "productPrice": "384.00"
 *                   },
 *                   {
 *                       "productName": "Spegesild",
 *                       "quantity": 20,
 *                       "productPrice": "192.00"
 *                   },
 *                   {
 *                       "productName": "Mozzarella di Giovanni",
 *                       "quantity": 40,
 *                       "productPrice": "1112.00"
 *                   }
 *               ],
 *               "totalAmount": "5038.10"
 *           },
 *           {
 *               "orderDate": "1997-02-19T00:00:00.000Z",
 *               "requiredDate": "1997-03-19T00:00:00.000Z",
 *               "shipDate": "1997-03-11T00:00:00.000Z",
 *               "productList": [
 *                   {
 *                       "productName": "Ikura",
 *                       "quantity": 20,
 *                       "productPrice": "496.00"
 *                   },
 *                   {
 *                       "productName": "Tourtière",
 *                       "quantity": 6,
 *                       "productPrice": "35.40"
 *                   }
 *               ],
 *               "totalAmount": "5569.50"
 *           },
 *           {
 *               "orderDate": "1996-10-21T00:00:00.000Z",
 *               "requiredDate": "1996-11-18T00:00:00.000Z",
 *               "shipDate": "1996-10-28T00:00:00.000Z",
 *               "productList": [
 *                   {
 *                       "productName": "Filo Mix",
 *                       "quantity": 8,
 *                       "productPrice": "44.80"
 *                   },
 *                   {
 *                       "productName": "Scottish Longbreads",
 *                       "quantity": 10,
 *                       "productPrice": "100.00"
 *                   }
 *               ],
 *               "totalAmount": "5714.30"
 *           },
 *           {
 *               "orderDate": "1996-07-08T00:00:00.000Z",
 *               "requiredDate": "1996-08-05T00:00:00.000Z",
 *               "shipDate": "1996-07-15T00:00:00.000Z",
 *               "productList": [
 *                   {
 *                       "productName": "Gustaf's Knäckebröd",
 *                       "quantity": 6,
 *                       "productPrice": "100.80"
 *                   },
 *                   {
 *                       "productName": "Ravioli Angelo",
 *                       "quantity": 15,
 *                       "productPrice": "234.00"
 *                   },
 *                   {
 *                       "productName": "Louisiana Fiery Hot Pepper Sauce",
 *                       "quantity": 20,
 *                       "productPrice": "336.00"
 *                   }
 *               ],
 *               "totalAmount": "6385.10"
 *           }
 *    ]   
*/

router.get ('/', async (req, res) => {
  let Id = req.body.data.customerID;
  const response = await getOrderHistoryList(Id);
  res.send(response);
});

module.exports = router;