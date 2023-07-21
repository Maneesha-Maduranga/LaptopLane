const CustomError = require('../Utiils/customError');

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.name == 'CastError') {
    return res.status(400).json({ error: 'Bad Object Id', sucess: false });
  }

  if (err.name == 'ValidationError') {
    let errMasg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
    return res.status(400).json({ error: errMasg, sucess: false });
  }

  if (err.code && err.code == 11000) {
    return res.status(400).json({
      error: `Already Used UserName try Used Another Values`,
      sucess: false,
    });
  }

  if (err instanceof CustomError) {
    return res
      .status(err.statusCode)
      .json({ error: err.message, sucess: false });
  } else {
    return res.status(500).send(err);
  }
};

module.exports = {
  errorHandler,
};
