define({ "api": [
  {
    "type": "post",
    "url": "/customer/add_customer",
    "title": "Add a new Customer",
    "name": "AddCustomer",
    "group": "Customers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>Customer's unique ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CompanyName",
            "description": "<p>Customer's company name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ContactName",
            "description": "<p>Customer's contact name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ContactTitle",
            "description": "<p>Customer's contact title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>Customer's address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "City",
            "description": "<p>Customer's city</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Region",
            "description": "<p>Customer's region</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PostalCode",
            "description": "<p>Customer's postal code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Country",
            "description": "<p>Customer's country</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>Customer's phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Fax",
            "description": "<p>Customer's fax number</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "array",
            "description": "<p>of Customer information object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\n {\n   \"CustomerID\": \"ALFKI\",\n    \"CompanyName\": \"Alfreds Futterkiste\",\n    \"ContactName\": \"Maria Anders\",\n    \"ContactTitle\": \"Sales Representative\",\n    \"Address\": \"Obere Str. 57\",\n    \"City\": \"Berlin\",\n    \"Region\": null,\n    \"PostalCode\": \"12209\",\n    \"Country\": \"Germany\",\n    \"Phone\": \"030-0074321\",\n    \"Fax\": \"030-0076545\"\n }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/customers.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "/customer/:customerID?",
    "title": "Request single or multiple customer information",
    "name": "GetCustomer",
    "group": "Customers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>Customer's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "array",
            "description": "<p>of Customer information objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\n {\n   \"CustomerID\": \"ALFKI\",\n    \"CompanyName\": \"Alfreds Futterkiste\",\n    \"ContactName\": \"Maria Anders\",\n    \"ContactTitle\": \"Sales Representative\",\n    \"Address\": \"Obere Str. 57\",\n    \"City\": \"Berlin\",\n    \"Region\": null,\n    \"PostalCode\": \"12209\",\n    \"Country\": \"Germany\",\n    \"Phone\": \"030-0074321\",\n    \"Fax\": \"030-0076545\"\n }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/customers.js",
    "groupTitle": "Customers"
  },
  {
    "type": "patch",
    "url": "/customer/update_customer_info",
    "title": "Change information for an existing customer",
    "name": "UpdateCustomer",
    "group": "Customers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>Customer's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "fields",
            "description": "<p>information about the fields to be changed.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "array",
            "description": "<p>of Customer information objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\n {\n   \"CustomerID\": \"ALFKI\",\n    \"CompanyName\": \"Alfreds Futterkiste\",\n    \"ContactName\": \"Maria Anders\",\n    \"ContactTitle\": \"Sales Representative\",\n    \"Address\": \"Obere Str. 57\",\n    \"City\": \"Berlin\",\n    \"Region\": null,\n    \"PostalCode\": \"12209\",\n    \"Country\": \"Germany\",\n    \"Phone\": \"030-0074321\",\n    \"Fax\": \"030-0076545\"\n }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/customers.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "/order_history/customerID",
    "title": "Get order history information for a customer",
    "name": "OrderHistory",
    "group": "OrdersHistory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerID",
            "description": "<p>Customer's unique id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of orders information objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\n   {\n       \"orderDate\": \"1998-01-21T00:00:00.000Z\",\n       \"requiredDate\": \"1998-02-18T00:00:00.000Z\",\n       \"shipDate\": \"1998-01-26T00:00:00.000Z\",\n       \"productList\": [\n           {\n               \"productName\": \"Manjimup Dried Apples\",\n               \"quantity\": 4,\n               \"productPrice\": \"212.00\"\n           }\n       ],\n       \"totalAmount\": \"212.00\"\n   },\n   {\n       \"orderDate\": \"1998-01-05T00:00:00.000Z\",\n       \"requiredDate\": \"1998-02-02T00:00:00.000Z\",\n       \"shipDate\": \"1998-01-14T00:00:00.000Z\",\n       \"productList\": [\n           {\n               \"productName\": \"Jack's New England Clam Chowder\",\n               \"quantity\": 20,\n               \"productPrice\": \"193.00\"\n           },\n           {\n               \"productName\": \"Ipoh Coffee\",\n               \"quantity\": 20,\n               \"productPrice\": \"920.00\"\n           },\n           {\n               \"productName\": \"Chocolade\",\n               \"quantity\": 8,\n               \"productPrice\": \"102.00\"\n           },\n           {\n               \"productName\": \"Sirop d'érable\",\n               \"quantity\": 30,\n               \"productPrice\": \"855.00\"\n           }\n       ],\n       \"totalAmount\": \"2282.00\"\n   },\n   {\n       \"orderDate\": \"1997-12-31T00:00:00.000Z\",\n       \"requiredDate\": \"1998-01-28T00:00:00.000Z\",\n       \"shipDate\": \"1998-01-05T00:00:00.000Z\",\n       \"productList\": [\n           {\n               \"productName\": \"Chang\",\n               \"quantity\": 20,\n               \"productPrice\": \"380.00\"\n           },\n           {\n               \"productName\": \"Louisiana Fiery Hot Pepper Sauce\",\n               \"quantity\": 2,\n               \"productPrice\": \"42.10\"\n           },\n           {\n               \"productName\": \"Longlife Tofu\",\n               \"quantity\": 15,\n               \"productPrice\": \"150.00\"\n           }\n       ],\n       \"totalAmount\": \"2854.10\"\n   },\n   {\n       \"orderDate\": \"1997-03-18T00:00:00.000Z\",\n       \"requiredDate\": \"1997-04-01T00:00:00.000Z\",\n       \"shipDate\": \"1997-03-26T00:00:00.000Z\",\n       \"productList\": [\n           {\n               \"productName\": \"Ikura\",\n               \"quantity\": 20,\n               \"productPrice\": \"496.00\"\n           }\n       ],\n       \"totalAmount\": \"3350.10\"\n   },\n   {\n       \"orderDate\": \"1997-02-27T00:00:00.000Z\",\n       \"requiredDate\": \"1997-03-27T00:00:00.000Z\",\n       \"shipDate\": \"1997-02-28T00:00:00.000Z\",\n       \"productList\": [\n           {\n               \"productName\": \"Uncle Bob's Organic Dried Pears\",\n               \"quantity\": 16,\n               \"productPrice\": \"384.00\"\n           },\n           {\n               \"productName\": \"Spegesild\",\n               \"quantity\": 20,\n               \"productPrice\": \"192.00\"\n           },\n           {\n               \"productName\": \"Mozzarella di Giovanni\",\n               \"quantity\": 40,\n               \"productPrice\": \"1112.00\"\n           }\n       ],\n       \"totalAmount\": \"5038.10\"\n   },\n   {\n       \"orderDate\": \"1997-02-19T00:00:00.000Z\",\n       \"requiredDate\": \"1997-03-19T00:00:00.000Z\",\n       \"shipDate\": \"1997-03-11T00:00:00.000Z\",\n       \"productList\": [\n           {\n               \"productName\": \"Ikura\",\n               \"quantity\": 20,\n               \"productPrice\": \"496.00\"\n           },\n           {\n               \"productName\": \"Tourtière\",\n               \"quantity\": 6,\n               \"productPrice\": \"35.40\"\n           }\n       ],\n       \"totalAmount\": \"5569.50\"\n   },\n   {\n       \"orderDate\": \"1996-10-21T00:00:00.000Z\",\n       \"requiredDate\": \"1996-11-18T00:00:00.000Z\",\n       \"shipDate\": \"1996-10-28T00:00:00.000Z\",\n       \"productList\": [\n           {\n               \"productName\": \"Filo Mix\",\n               \"quantity\": 8,\n               \"productPrice\": \"44.80\"\n           },\n           {\n               \"productName\": \"Scottish Longbreads\",\n               \"quantity\": 10,\n               \"productPrice\": \"100.00\"\n           }\n       ],\n       \"totalAmount\": \"5714.30\"\n   },\n   {\n       \"orderDate\": \"1996-07-08T00:00:00.000Z\",\n       \"requiredDate\": \"1996-08-05T00:00:00.000Z\",\n       \"shipDate\": \"1996-07-15T00:00:00.000Z\",\n       \"productList\": [\n           {\n               \"productName\": \"Gustaf's Knäckebröd\",\n               \"quantity\": 6,\n               \"productPrice\": \"100.80\"\n           },\n           {\n               \"productName\": \"Ravioli Angelo\",\n               \"quantity\": 15,\n               \"productPrice\": \"234.00\"\n           },\n           {\n               \"productName\": \"Louisiana Fiery Hot Pepper Sauce\",\n               \"quantity\": 20,\n               \"productPrice\": \"336.00\"\n           }\n       ],\n       \"totalAmount\": \"6385.10\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orderHistory.js",
    "groupTitle": "OrdersHistory"
  },
  {
    "type": "post",
    "url": "/product/add_product",
    "title": "Add new product",
    "name": "AddProduct",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ProductName",
            "description": "<p>Product's name</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "SupplierID",
            "description": "<p>Product supplier's id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "CategoryID",
            "description": "<p>Product category's id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "QuantityPerUnit",
            "description": "<p>Each products quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "Decimal",
            "optional": false,
            "field": "UnitPrice",
            "description": "<p>Each products price per unit</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "UnitsInStock",
            "description": "<p>Quantity of product in stock</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "UnitsOnOrder",
            "description": "<p>Quantity of product in order</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "ReorderLevel",
            "description": "<p>Quantity of product in reorderorder</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "Discontinued",
            "description": "<p>Is the product available</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "array",
            "description": "<p>of Products information objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\n  {\n    \"ProductID\": 1,\n    \"ProductName\": \"Chai\",\n    \"SupplierID\": 1,\n    \"CategoryID\": 1,\n    \"QuantityPerUnit\": \"10 boxes x 20 bags\",\n    \"UnitPrice\": \"18.0000\",\n    \"UnitsInStock\": 39,\n    \"UnitsOnOrder\": 0,\n    \"ReorderLevel\": 10,\n    \"Discontinued\": {\n        \"type\": \"Buffer\",\n        \"data\": [\n            0\n        ]\n    }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/product/:productID?",
    "title": "Request single or multiple product information",
    "name": "GetProduct",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "productID",
            "description": "<p>Product's unique id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "array",
            "description": "<p>of Products information objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\n  {\n    \"ProductID\": 1,\n    \"ProductName\": \"Chai\",\n    \"SupplierID\": 1,\n    \"CategoryID\": 1,\n    \"QuantityPerUnit\": \"10 boxes x 20 bags\",\n    \"UnitPrice\": \"18.0000\",\n    \"UnitsInStock\": 39,\n    \"UnitsOnOrder\": 0,\n    \"ReorderLevel\": 10,\n    \"Discontinued\": {\n        \"type\": \"Buffer\",\n        \"data\": [\n            0\n        ]\n    }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "patch",
    "url": "/product/update_product_info",
    "title": "Change information for an existing product",
    "name": "UpdateProduct",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "productID",
            "description": "<p>Product's unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "fields",
            "description": "<p>information about the fields to be changed.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "array",
            "description": "<p>of Products information objects</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "[\n  {\n    \"ProductID\": 1,\n    \"ProductName\": \"Chai\",\n    \"SupplierID\": 1,\n    \"CategoryID\": 1,\n    \"QuantityPerUnit\": \"10 boxes x 20 bags\",\n    \"UnitPrice\": \"18.0000\",\n    \"UnitsInStock\": 39,\n    \"UnitsOnOrder\": 0,\n    \"ReorderLevel\": 10,\n    \"Discontinued\": {\n        \"type\": \"Buffer\",\n        \"data\": [\n            0\n        ]\n    }\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/products.js",
    "groupTitle": "Products"
  }
] });
