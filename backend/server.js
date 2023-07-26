//Express
const express = require('express');
const path = require('path');

//Additional Package
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');

//docs
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
let docs = YAML.load(path.join(__dirname, 'docs.yaml'));

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 50,
// });

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

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'same-site' },
    contentSecurityPolicy: false,
  })
);
// app.use(limiter);
app.use(mongoSanitize());

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload());

//Serve Public Assest
app.use('/static', express.static(path.join(__dirname, 'public')));

// Home Routes

// Additional Routes
app.use('/api/laptop/', LaptopRouter);
app.use('/api/auth/', authRouter);
app.use('/api/user/', userRouter);
app.use('/api/review/', reviewRouter);
app.use('/api/order/', orderRouter);
//Docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(docs));

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('Laptop Store MERN APPLICATION');
  });
}

//Middleware
app.use(notFound);
app.use(errorHandler);

//Entry Point
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
