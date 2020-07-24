const express = require('express');
const router = express.Router();
const Orders = require('../models/Orders');
const OrderDetails = require('../models/OrderDetails');
const Products = require('../models/Products');


// Get order history
router.get ('/', async (req, res) => {
  let Id = req.body.data.customerID;
  const orderHistory = await getOrderHistory(Id);
  const productIdList = getProductId(orderHistory);
  const productNameList = await getProductName(productIdList);
  const orderHistoryList = getOrderHistoryList(orderHistory, productNameList);
  res.send(JSON.stringify(orderHistoryList));
});




const getOrderHistory = async (customerID) => {
  Orders.hasMany(OrderDetails, {foreignKey: 'OrderID'});
  OrderDetails.belongsTo(Orders, {
    foreignKey: 'OrderID'
  });

  const orderHistory = await Orders.findAll({
    where: {
      CustomerID: customerID
    },
    include: OrderDetails
  }).catch (err => console.log(err));
  
  return orderHistory;
};

const getProductId = (orderHistory) => {
  let productIdList = [];

  orderHistory.map (order => {
    order.OrderDetails.map (productId => {
      productIdList.push(productId.dataValues.ProductID);
    });
  });

  return productIdList;
};

const getProductName = async (productId) => {
  const productName = await Products.findAll({
    where: {
      ProductID: productId
    },
    attributes: ['ProductID','ProductName']
  }).catch(err => {throw err});
  return productName;
};

const getOrderHistoryList = (orderHistory, productNameList) => {
  const orderList = [];
  let productList = [];
  orderHistory.map (order => {
    let orderDate = order.OrderDate;
    let requiredDate = order.RequiredDate;
    let shipDate = order.ShippedDate;
    let orderDetails = order.OrderDetails;
    productList = [];
    orderDetails.map (product => {
      let quantity = product.Quantity;
      let price = product.UnitPrice * quantity;
      let res = productNameList.find(id => id.ProductID === product.ProductID);
      productName = res.ProductName
      productList.push({productName, quantity, price});
    })
    orderList.push({orderDate, requiredDate, shipDate, productList});
  });

  return orderList;
};

module.exports = router;