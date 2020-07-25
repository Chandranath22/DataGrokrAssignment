const Customer = require('../models/Customers');
const { create } = require('../models/Customers');
const Customers = require('../models/Customers');
const { CustomerSchema } = require('../helper/validation_schema');

const getCustomerInfo = async (customerID) => {
  try
  {
    let query = {};
    if (customerID) {
      if(!isNaN(customerID)){
        return "Invalid customerID";
      }
      query.where = { CustomerID: customerID };
    }
    const response =  await Customer.findAll(query);

    if(response.length > 0) {
      return JSON.stringify(response);
    } else {
      return "Sorry no customer found";
    }
  } catch (error) {
    return error;
  }
};

const addCustomer = async (data) => {
  try
  {
    const result = await CustomerSchema.validateAsync(data);

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
    } = result;

    const customerObj = {
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

    const response = await Customer.create (customerObj);    
    return JSON.stringify(response);
  } catch (error) {
    if (error.isJoi) {
      return error.message;
    }
    return error;
  }
};

const updateCustomerInfo = async (data) => {
  try
  {
    let { fields, customerID } = data;
    const res = await Customer.update (
      fields,
      {
        where: {
          CustomerID: customerID
        }
    });

    if (res[0]) {
      const response = await Customers.findOne({
        where: {
          CustomerID: customerID
        }
      });
      return JSON.stringify(response);
    } else {
      return "Nothing to update";
    }
  } catch (error) {
    return error;
  }
};

module.exports = {getCustomerInfo, updateCustomerInfo, addCustomer};