const express = require('express');
const router = express.Router();
const actions = require('../actions/customer');

/**
 * @api {get} /customer/:customerID? Request single or multiple customer information
 * @apiName GetCustomer
 * @apiGroup Customers
 * 
 * @apiParam {Int} customerID Customer's unique ID.
 * 
 * @apiSuccess {object[]} array of Customer information objects
 * 
 * @apiSuccessExample Response:
 *     [
 *      {
 *        "CustomerID": "ALFKI",
 *         "CompanyName": "Alfreds Futterkiste",
 *         "ContactName": "Maria Anders",
 *         "ContactTitle": "Sales Representative",
 *         "Address": "Obere Str. 57",
 *         "City": "Berlin",
 *         "Region": null,
 *         "PostalCode": "12209",
 *         "Country": "Germany",
 *         "Phone": "030-0074321",
 *         "Fax": "030-0076545"
 *      }
*      ]
 */
router.get ('/:customerID?', async(req, res) => {
  const Id = req.params.customerID;
  console.log(Id);
  let result = await actions.getCustomerInfo(Id);
  res.send(result);
});



/**
 * @api {post} /customer/add_customer Add a new Customer
 * @apiName AddCustomer
 * @apiGroup Customers
 * 
 * @apiParam {Int} customerID Customer's unique ID
 * @apiParam {String} CompanyName Customer's company name
 * @apiParam {String} ContactName Customer's contact name
 * @apiParam {String} ContactTitle Customer's contact title
 * @apiParam {String} Address Customer's address
 * @apiParam {String} City Customer's city
 * @apiParam {String} Region Customer's region
 * @apiParam {String} PostalCode Customer's postal code
 * @apiParam {String} Country Customer's country
 * @apiParam {String} Phone Customer's phone number
 * @apiParam {String} Fax Customer's fax number
 * 
 * @apiSuccess {object[]} array of Customer information object
 * 
 * @apiSuccessExample Response:
 *     [
 *      {
 *        "CustomerID": "ALFKI",
 *         "CompanyName": "Alfreds Futterkiste",
 *         "ContactName": "Maria Anders",
 *         "ContactTitle": "Sales Representative",
 *         "Address": "Obere Str. 57",
 *         "City": "Berlin",
 *         "Region": null,
 *         "PostalCode": "12209",
 *         "Country": "Germany",
 *         "Phone": "030-0074321",
 *         "Fax": "030-0076545"
 *      }
*      ]
 */
router.post ('/add_customer', async (req, res) => {
  const data = req.body;
  const result = await actions.addCustomer(data);
  res.send(result);
});



/**
 * @api {patch} /customer/update_customer_info Change information for an existing customer
 * @apiName UpdateCustomer
 * @apiGroup Customers
 * 
 * @apiParam {Int} customerID Customer's unique ID.
 * @apiParam {object} fields information about the fields to be changed.
 * 
 * @apiSuccess {object[]} array of Customer information objects
 * 
 * @apiSuccessExample Response:
 *     [
 *      {
 *        "CustomerID": "ALFKI",
 *         "CompanyName": "Alfreds Futterkiste",
 *         "ContactName": "Maria Anders",
 *         "ContactTitle": "Sales Representative",
 *         "Address": "Obere Str. 57",
 *         "City": "Berlin",
 *         "Region": null,
 *         "PostalCode": "12209",
 *         "Country": "Germany",
 *         "Phone": "030-0074321",
 *         "Fax": "030-0076545"
 *      }
*      ]
 */
router.patch ('/update_customer_info', async (req, res) => {
  const data = req.body;
  const result = await actions.updateCustomerInfo(data);
  res.send(result);
});


module.exports = router;