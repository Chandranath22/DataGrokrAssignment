const express = require('express');
const router = express.Router();
const actions = require('../actions/order');


/**
 * @api {get} /product/:orderID? Request order(s) information
 * 
 * @apiName GetOrder
 * @apiGroup Orders
 * 
 * @apiParam {Int} orderID Orders's unique id
 * 
 * @apiSuccess {object[]} Array of orders information objects
 * 
 * @apiSuccessExample Response:
 *      [
 *        {
 *          "OrderID": 10451,
 *           "CustomerID": "QUICK",
 *           "EmployeeID": 4,
 *           "OrderDate": "1997-02-19T00:00:00.000Z",
 *           "RequiredDate": "1997-03-05T00:00:00.000Z",
 *           "ShippedDate": "1997-03-12T00:00:00.000Z",
 *           "ShipVia": 3,
 *           "Freight": "189.0900",
 *           "ShipName": "QUICK-Stop",
 *           "ShipAddress": "Taucherstraße 10",
 *           "ShipCity": null,
 *           "ShipPostalcode": "01307",
 *           "ShipCountry": "Germany"
 *        }
 *      ]
 */

router.get ('/:orderID?', async (req, res) => {
  let Id = req.params.orderID;
  const result = await actions.getOrderInfo(Id);
  res.send(result);
});



/**
 * @api {post} /product/place_order Place a new order
 * 
 * @apiName PlaceOrder
 * @apiGroup Orders
 * 
 * @apiParam {Int} OrderID Orders's unique id
 * @apiParam {String} CustomerID Customer's unique id
 * @apiParam {Int} EmployeeID Employee's unique id
 * @apiParam {DateTime} OrderDate Ordering date
 * @apiParam {DateTime} ShippedDate Shipping date
 * @apiParam {DateTime} Required Required date
 * @apiParam {Int} ShipVia Shipper's unique id
 * @apiParam {Decimal} Freight Freight
 * @apiParam {String} ShipName Shipping name
 * @apiParam {String} ShipAddress Shipping address
 * @apiParam {String} ShipCity Shipping city
 * @apiParam {String} ShipPostalCode Shipping postal code
 * @apiParam {String} ShipCountry Shipping country
 * 
 * @apiSuccess {object[]} Array of orders information objects
 * 
 * @apiSuccessExample Response:
 *      [
 *        {
 *          "OrderID": 10451,
 *           "CustomerID": "QUICK",
 *           "EmployeeID": 4,
 *           "OrderDate": "1997-02-19T00:00:00.000Z",
 *           "RequiredDate": "1997-03-05T00:00:00.000Z",
 *           "ShippedDate": "1997-03-12T00:00:00.000Z",
 *           "ShipVia": 3,
 *           "Freight": "189.0900",
 *           "ShipName": "QUICK-Stop",
 *           "ShipAddress": "Taucherstraße 10",
 *           "ShipCity": null,
 *           "ShipPostalcode": "01307",
 *           "ShipCountry": "Germany"
 *        }
 *      ]
 */

router.post ('/place_order', async (req, res) => {
  let data = req.body;
  const result = await actions.placeOrder(data);
  console.log(result);
  res.send(result);
});


/**
 * @api {patch} /product/update_order Change information for an existing order
 * 
 * @apiName UpdateOrder
 * @apiGroup Orders
 * 
 * @apiParam {Int} orderID Orders's unique id
 * @apiParam {object} fields information about the fields to be changed.
 * 
 * @apiSuccess {object[]} Array of orders information objects
 * 
 * @apiSuccessExample Response:
 *      [
 *        {
 *          "OrderID": 10451,
 *           "CustomerID": "QUICK",
 *           "EmployeeID": 4,
 *           "OrderDate": "1997-02-19T00:00:00.000Z",
 *           "RequiredDate": "1997-03-05T00:00:00.000Z",
 *           "ShippedDate": "1997-03-12T00:00:00.000Z",
 *           "ShipVia": 3,
 *           "Freight": "189.0900",
 *           "ShipName": "QUICK-Stop",
 *           "ShipAddress": "Taucherstraße 10",
 *           "ShipCity": null,
 *           "ShipPostalcode": "01307",
 *           "ShipCountry": "Germany"
 *        }
 *      ]
 */

router.patch ('/update_order', async (req, res) => {
  let data = req.body;
  const result = await actions.updateOrder(data);
  console.log(result);
  res.send(result);
});

module.exports = router;