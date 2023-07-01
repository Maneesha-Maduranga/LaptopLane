//Express
const express = require('express');

//Additional Package
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');

//ENV
const port = process.env.PORT || 5000;
//Db
const { connectDB } = require('./Config/database');
//Routes
const LaptopRouter = require('./Routes/Laptop');
const authRouter = require('./Routes/Auth');
const userRouter = require('./Routes/User');

//Middleware
const { notFound } = require('./middleware/notFound');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Home Routes
app.get('/', (req, res) => {
  res.send('Laptop Store MERN APPLICATION');
  console.log('Cookies: ', req.cookies);
});

app.use('/api/laptop/', LaptopRouter);
app.use('/api/auth/', authRouter);
app.use('/api/user/', userRouter);

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
