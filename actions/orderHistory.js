const Orders = require('../models/Orders');
const OrderDetails = require('../models/OrderDetails');
const Products = require('../models/Products');

const getOrderHistory = async (customerID) => {
  try {
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
  } catch (error) {
    return error;
  }
};

const getProductId = (orderHistory) => {
  try {
    let productIdList = [];

    orderHistory.map (order => {
      order.OrderDetails.map (productId => {
        productIdList.push(productId.dataValues.ProductID);
      });
    });

    return productIdList;
  } catch (error) {
    return error;
  }
};

const getProductName = async (productId) => {
  try {
    const productName = await Products.findAll({
    where: {
      ProductID: productId
    },
    attributes: ['ProductID','ProductName']
    });
    return productName;
  } catch (error) {
    return error;
  }
};

const getOrderHistoryList = async (customerID) => {
  try {
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
  } catch (error) {
    return error;
  }
};

module.exports = getOrderHistoryList;