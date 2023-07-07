const CustomError = require('../Utiils/customError');
const { verifyToken } = require('../Utiils/Jwt');

const authentication = (req, res, next) => {
  let token = req.cookies.Access_Token;
  if (!token) {
    throw new CustomError('Unauthorized', 401);
  }
  try {
    let payload = verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    throw new CustomError('Unauthorized', 401);
  }
};

const roleAccess = (...rest) => {
  return (req, res, next) => {
    if (!rest.includes(req.user.role)) {
      throw new CustomError('Forbidden', 403);
    }
    next();
  };
};

const authorization = (user, id) => {
  // console.log(user.id, id);
  if (user.role == 'admin') {
    return;
  } else if (user.id == id.toString()) {
    return;
  } else {
    throw new CustomError('Fobbiden', 403);
  }
};

module.exports = {
  authentication,
  roleAccess,
  authorization,
};
