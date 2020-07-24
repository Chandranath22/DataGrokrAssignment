const express = require('express');
const router = express.Router();
const Customer = require('../models/Customers');

// Get customer info from database
router.get ('/', async(req, res) => {
  const Id = req.body.data.customerID;
  let response = await getCustomerInfo(Id);
  res.send(JSON.stringify(response));
});



// Insert new customer into databse
router.post ('/add_customer', async (req, res) => {
  console.log(req.body.data);
  const data = req.body.data;
  const response = await addCustomer(data);
  res.sendStatus(200);
});



// Update customer info
router.patch ('/update_customer_info', async (req, res) => {
  const data = req.body.data;
  const response = await updateCustomerInfo(data);
  if (response){
    console.log(response);
    res.sendStatus(200);
  }
});







const getCustomerInfo = async (customerID) => {
  let customer =  await Customer.findAll({
    where: {
      CustomerID: customerID
    }
  }).catch((err) => console.log(err));
  return customer;
};

const addCustomer = async (data) => {
  let { 
    customerID,
    companyName,
    contactName,
    contactTitle,
    address,
    city,
    region,
    postalCode,
    country,
    phone,
    fax
  } = data;

  const response = await Customer.create ({
    CustomerID: customerID,
    CompanyName: companyName,
    ContactName: contactName,
    ContactTitle: contactTitle,
    Address: address,
    City: city,
    Region: region,
    PostalCode: postalCode,
    Country: country,
    Phone: phone,
    Fax: fax
  }).catch(err => console.log(err));
  console.log(response);
  return response
};

const updateCustomerInfo = async (data) => {
  let { fields, customerID} = data;
  const response = await Customer.update (
    fields,
    {
      where: {
        CustomerID: customerID
      }
  });
  return response;
};

module.exports = router;