const mongoose = require('mongoose');
const Joi = require('joi');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'user',
});

//Joi Validator
const userValidator = (username, email, password) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate({ username, email, password });
};

//Hash Password
UserSchema.pre('save', async function (next) {
  try {
    const hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
  } catch (error) {
    console.log(error);
  }
  next();
});

//Validate Password
UserSchema.method('validatePassword', async function (password) {
  const isMatched = await bcrypt.compare(password, this.password);
  return isMatched;
});

const User = mongoose.model('User', UserSchema);

module.exports = {
  User,
  userValidator,
};
