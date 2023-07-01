const jwt = require('jsonwebtoken');

const cookieExpire = 1000 * 60 * 60 * 24;

const createToken = ({ payload }) => {
  let token = jwt.sign(payload, process.env.JWTSECREAT, {
    expiresIn: '1d',
  });
  return token;
};

const sendCookie = (res, tokenUser) => {
  let token = createToken({ payload: tokenUser });
  res.cookie('Access_Token', token, {
    expires: new Date(Date.now() + cookieExpire),
    httpOnly: true,
  });
};

const verifyToken = (token) => {
  let valid = jwt.verify(token, process.env.JWTSECREAT);
  return valid;
};

module.exports = {
  createToken,
  sendCookie,
  verifyToken,
};
