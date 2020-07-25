const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./config/database');
const customers = require('./routes/customers');
const products = require('./routes/products');
const orderHistory = require('./routes/orderHistory');

const app = express();

app.use(cors());
app.use(bodyParser.json());



// Test database connection
database.authenticate()
.then(() => console.log("Connected to db"))
.catch(err => console.log(err));

// Test server connection
app.get('/', (req, res) => {
  res.send("Connected");
});


// Routes
app.use('/customer', customers);
app.use('/product', products);
app.use('/order_history', orderHistory);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listning on port ${PORT}`);
});