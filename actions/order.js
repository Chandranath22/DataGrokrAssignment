const Orders = require('../models/Orders');

const getOrderInfo = async (orderID) => {
  let query = {};
  if (orderID) {
    query.where = { OrderID: orderID };
  }
  const response = await Orders.findAll(query).catch (err => {throw err});

  return JSON.stringify(response);
};


const placeOrder = async (data) => {
  let {
    customerID,
    employeeID,
    orderDate,
    requiredDate,
    shippedDate,
    shipVia,
    freight,
    shipName,
    shipAddress,
    shipCity,
    shipPostalCode,
    shipCountry
  } = data;

  let createObj = {
    CustomerID: customerID,
    EmployeeID: employeeID,
    OrderDate: orderDate,
    RequiredDate: requiredDate,
    ShippedDate: shippedDate,
    ShipVia: shipVia,
    Freight: freight,
    ShipNAme: shipName,
    ShipAddress: shipAddress,
    ShipCity: shipCity,
    ShipPostalCode: shipPostalCode,
    ShipCountry: shipCountry
  }

  const response = Orders.create(createObj).catch (err => {throw err});

  return JSON.stringify(response);
};



const updateOrder = async (data) => {
  let { fields, orderID } = data;
  const res = await Orders.update(
    {fields},
    {
      where: {
        OrderID: orderID
      }
    }
  ).catch (err => {throw err});
  
  if(res[0]) {
    const response = await Orders.findOne({
      where: {
        OrderID: orderID
      }
    }).catch(err => {throw err});
    return JSON.stringify(response);
  } else {
    return "Nothing to update";
  }
};

module.exports = {getOrderInfo, placeOrder, updateOrder};