const mongoose = require('mongoose');
//Connect DataBase
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CLOUDBDURL);
    console.log('Connected To The Database');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDB,
};
