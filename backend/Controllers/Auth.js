const { User, userValidator } = require('../Model/User');
const CustomError = require('../Utiils/customError');

const { createToken, sendCookie } = require('../Utiils/Jwt');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const { error } = userValidator(username, email, password);

  if (error) {
    throw new CustomError(error.message, 400);
  }

  let user = await User.findOne({ email });

  if (user) {
    throw new CustomError('Email Is Allready Used.Try Another One', 400);
  }

  user = await User.create({ username, email, password });

  let tokenUser = { name: user.username, email: user.email, role: user.role };

  sendCookie(res, tokenUser);

  res.status(200).json({
    sucess: true,
    data: user,
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
    data: 'Login Sucess',
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
