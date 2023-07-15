const { User } = require('../Model/User');
const CustomError = require('../Utiils/customError');
const { passwordValidator } = require('../Utiils/password');
const { authorization } = require('../middleware/security');

const getAllUser = async (req, res) => {
  const users = await User.find({ role: 'user' }).select('-password');

  res.status(200).json({
    sucess: true,
    data: users,
  });
};

const getsingleUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).select('-password');
  if (!user) {
    throw new CustomError('User Not found With Id', 404);
  }
  res.status(200).json({
    sucess: true,
    data: user,
  });
};
const showUser = async (req, res) => {
  let { name, email, id } = req.user;

  const user = await User.findById({ _id: id })
    .populate('orders')
    .select('-password');

  if (!user) {
    throw new CustomError('No User find with Given Id', 404);
  }

  res.status(200).json({
    sucess: true,
    data: {
      name,
      email,
      id,
      user,
    },
  });
};
const updateUser = async (req, res) => {
  res.send('update User');
  // TODO
};

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (oldPassword === '' || newPassword === '') {
    throw new CustomError('Please Enter Values For the Password Fields', 400);
  }
  let user = await User.findOne({ email: req.user.email });

  if (!user) {
    throw new CustomError('User Is NotFound With Given Email', 404);
  }

  let isMatched = await user.validatePassword(oldPassword);

  if (!isMatched) {
    throw new CustomError(
      'Invalid Password.Please try With Correct Password',
      400
    );
  }

  let { error } = passwordValidator(newPassword);

  if (error) {
    throw new CustomError(error.message, 400);
  }

  user.password = newPassword;

  await user.save();

  res.status(200).json({
    sucess: true,
    data: 'Password Update Success',
  });
};

module.exports = {
  getAllUser,
  getsingleUser,
  showUser,
  updateUser,
  updateUserPassword,
};
