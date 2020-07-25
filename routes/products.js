const express = require('express');
const router = express.Router();
const actions = require('../actions/product');

/**
 * @api {get} /product/:productID? Request single or multiple product information
 * 
 * @apiName GetProduct
 * @apiGroup Products
 * 
 * @apiParam {Int} productID Product's unique id
 * 
 * @apiSuccess {object[]} array of Products information objects
 * 
 * @apiSuccessExample Response:
 *      [
 *        {
 *          "ProductID": 1,
 *          "ProductName": "Chai",
 *          "SupplierID": 1,
 *          "CategoryID": 1,
 *          "QuantityPerUnit": "10 boxes x 20 bags",
 *          "UnitPrice": "18.0000",
 *          "UnitsInStock": 39,
 *          "UnitsOnOrder": 0,
 *          "ReorderLevel": 10,
 *          "Discontinued": {
 *              "type": "Buffer",
 *              "data": [
 *                  0
 *              ]
 *          }
 *        }
 *      ]
 */
router.get ('/:productID?', async(req, res) => {
  const Id = req.params.productID;
  let result = await actions.getProductInfo(Id);
  res.send(result);
});



/**
 * @api {post} /product/add_product Add new product
 * 
 * @apiName AddProduct
 * @apiGroup Products
 * 
 * @apiParam {String} ProductName Product's name
 * @apiParam {Int} SupplierID Product supplier's id
 * @apiParam {Int} CategoryID Product category's id
 * @apiParam {String} QuantityPerUnit Each products quantity
 * @apiParam {Decimal} UnitPrice Each products price per unit
 * @apiParam {Int} UnitsInStock Quantity of product in stock
 * @apiParam {Int} UnitsOnOrder Quantity of product in order
 * @apiParam {Int} ReorderLevel Quantity of product in reorderorder
 * @apiParam {Bit} Discontinued Is the product available (0, 1)
 * 
 * @apiSuccess {object[]} array of Products information objects
 * 
 * @apiSuccessExample Response:
 *      [
 *        {
 *          "ProductID": 1,
 *          "ProductName": "Chai",
 *          "SupplierID": 1,
 *          "CategoryID": 1,
 *          "QuantityPerUnit": "10 boxes x 20 bags",
 *          "UnitPrice": "18.0000",
 *          "UnitsInStock": 39,
 *          "UnitsOnOrder": 0,
 *          "ReorderLevel": 10,
 *          "Discontinued": {
 *              "type": "Buffer",
 *              "data": [
 *                  0
 *              ]
 *          }
 *        }
 *      ]
 */
router.post ('/add_product', async (req, res) => {
  const data = req.body;
  const result = await actions.addProduct(data);
  res.send(result);
});



/**
 * @api {patch} /product/update_product_info Change information for an existing product
 * 
 * @apiName UpdateProduct
 * @apiGroup Products
 * 
 * @apiParam {Int} productID Product's unique id
 * @apiParam {object} fields information about the fields to be changed.
 * 
 * @apiSuccess {object[]} array of Products information objects
 * 
 * @apiSuccessExample Response:
 *      [
 *        {
 *          "ProductID": 1,
 *          "ProductName": "Chai",
 *          "SupplierID": 1,
 *          "CategoryID": 1,
 *          "QuantityPerUnit": "10 boxes x 20 bags",
 *          "UnitPrice": "18.0000",
 *          "UnitsInStock": 39,
 *          "UnitsOnOrder": 0,
 *          "ReorderLevel": 10,
 *          "Discontinued": {
 *              "type": "Buffer",
 *              "data": [
 *                  0
 *              ]
 *          }
 *        }
 *      ]
 */
router.patch ('/update_product_info', async (req, res) => {
  const data = req.body;
  const result = await actions.updateProductInfo(data);
  res.send(result);
});


module.exports = router;