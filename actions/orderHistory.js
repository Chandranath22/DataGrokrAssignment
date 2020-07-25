const Orders = require('../models/Orders');
const OrderDetails = require('../models/OrderDetails');
const Products = require('../models/Products');

const getOrderHistory = async (customerID) => {
  Orders.hasMany(OrderDetails, {
    foreignKey: 'OrderID'
  });
  
  OrderDetails.belongsTo(Orders, {
    foreignKey: 'OrderID'
  });

  const orderHistory = await Orders.findAll({
    where: {
      CustomerID: customerID
    },
    order: [
      ['RequiredDate', 'DESC']
    ],
    include: OrderDetails
  }).catch (err => {throw err});
  
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

const getOrderHistoryList = async (customerID) => {
  const orderHistory = await getOrderHistory(customerID);
  const productIdList = getProductId(orderHistory);
  const productNameList = await getProductName(productIdList);

  const orderList = [];
  let productList = [];
  let amount = 0;
  let totalAmount = 0;

  orderHistory.map (order => {
    let orderDate = order.OrderDate;
    let requiredDate = order.RequiredDate;
    let shipDate = order.ShippedDate;
    let orderDetails = order.OrderDetails;
    productList = [];
    orderDetails.map (product => {
      let quantity = product.Quantity;
      let price = product.UnitPrice * quantity;
      let productPrice = price.toFixed(2);
      amount = amount + price;
      let res = productNameList.find(id => id.ProductID === product.ProductID);
      productName = res.ProductName
      productList.push({productName, quantity, productPrice});
    });
    totalAmount = amount.toFixed(2);
    orderList.push({orderDate, requiredDate, shipDate, productList, totalAmount});
  });

  return JSON.stringify(orderList);
};

module.exports = getOrderHistoryList;