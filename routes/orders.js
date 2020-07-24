const express = require('express');
const router = express.Router();
const Orders = require('../models/Orders');


// Get order info
router.get ('/', async (req, res) => {
  let Id = req.body.data.orderID;
  const response = await getOrderInfo(Id);
  res.send(JSON.stringify(response));
});


// Place new order
router.post ('/place_order', async (req, res) => {
  let data = req.body.data;
  const response = await placeOrder(data);
  console.log(response);
  res.send(JSON.stringify(response));
});


// Update an order info
router.patch ('/update_order', async (req, res) => {
  let data = req.body.data;
  const response = await updateOrder(data);
  console.log(response);
  res.send(JSON.stringify(response));
});




const getOrderInfo = async (orderID) => {
  const response = await Orders.findAll({
    where: {
      OrderID: orderID
    }
  }).catch (err => console.log(err));

  return response;
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

  const response = Orders.create({
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
  }).catch (err => console.log(err));

  return response;
};



const updateOrder = async (data) => {
  let { fields, orderID } = data;
  const response = await Orders.update(
    {fields},
    {
      where: {
        OrderID: orderID
      }
    }
  ).catch (err => console.log(err));
  return response;
};

module.exports = router;