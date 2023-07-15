//Express
const express = require('express');
const path = require('path');

//Additional Package
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

//ENV
const port = process.env.PORT || 5000;
//Db
const { connectDB } = require('./Config/database');
//Routes
const LaptopRouter = require('./Routes/Laptop');
const authRouter = require('./Routes/Auth');
const userRouter = require('./Routes/User');
const reviewRouter = require('./Routes/Review');
const orderRouter = require('./Routes/Order');

//Middleware
const { notFound } = require('./middleware/notFound');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload());

app.use('/static', express.static(path.join(__dirname, 'public')));

// Home Routes
app.get('/', (req, res) => {
  res.send('Laptop Store MERN APPLICATION');
});

app.use('/api/laptop/', LaptopRouter);
app.use('/api/auth/', authRouter);
app.use('/api/user/', userRouter);
app.use('/api/review/', reviewRouter);
app.use('/api/order/', orderRouter);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log('Server IS Running');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
