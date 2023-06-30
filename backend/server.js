const express = require('express');
require('dotenv').config();
require('express-async-errors');

const cors = require('cors');

const port = process.env.PORT || 5000;

const LaptopRouter = require('./Routes/Laptop');

const app = express();

app.use(express.json());
app.use(cors());

// Home Routes
app.get('/', (req, res) => {
  res.send('Laptop Store MERN APPLICATION');
});

app.use('/api/laptop/', LaptopRouter);

const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log('Server IS Running');
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
