const Customer = require('../models/Customers');
const { create } = require('../models/Customers');
const Customers = require('../models/Customers');

const getCustomerInfo = async (customerID) => {
  let query = {};
  if (customerID) {
    query.where = { CustomerID: customerID };
  }

  let customer =  await Customer.findAll(query)
  .catch((err) => {throw err});

  return JSON.stringify(customer);
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

  const createObj = {
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
  }

  const response = await Customer.create (createObj).catch(err => {throw err});
  return JSON.stringify(response);
};

const updateCustomerInfo = async (data) => {
  let { fields, customerID } = data;
  const res = await Customer.update (
    fields,
    {
      where: {
        CustomerID: customerID
      }
  }).catch (err => {throw err});

  if (res[0]) {
    const response = await Customers.findOne({
      where: {
        CustomerID: customerID
      }
    }).catch(err => {throw err});
    return JSON.stringify(response);
  } else {
    return "Nothing to update";
  }
};

module.exports = {getCustomerInfo, updateCustomerInfo, addCustomer};