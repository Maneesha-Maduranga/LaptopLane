// Models
const { User, userValidator } = require('../Model/User');
// Helpers
const CustomError = require('../Utiils/customError');
const { sendCookie } = require('../Utiils/Jwt');

//All Authentication Functions

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const { error } = userValidator(username, email, password);

  if (error) {
    throw new CustomError(error.message, 400);
  }

  let user = await User.findOne({ email });
  // Check user Allready Exist
  if (user) {
    throw new CustomError('Email Is Allready Used.Try Another One', 400);
  }

  user = await User.create({ username, email, password });

  let tokenUser = {
    id: user._id,
    name: user.username,
    email: user.email,
    role: user.role,
  };

  sendCookie(res, tokenUser);

  res.status(200).json({
    sucess: true,
    data: tokenUser,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    throw new CustomError(
      'User Is Not Found With Email,Try again with register',
      404
    );
  }

  let isMatched = await user.validatePassword(password);

  if (!isMatched) {
    throw new CustomError('Password Is Incorrect', 400);
  }

  let tokenUser = {
    id: user._id,
    name: user.username,
    email: user.email,
    role: user.role,
  };

  sendCookie(res, tokenUser);

  res.status(200).json({
    sucess: true,
    data: tokenUser,
  });
};

const logoutUser = async (req, res) => {
  res.cookie('Acess Token', '', {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    sucess: true,
  });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
