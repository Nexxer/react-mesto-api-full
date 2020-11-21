const { JWT_SECRET = 'secret' } = process.env;
const jwt = require('jsonwebtoken');
const FailPassOrLogin = require('./errors/failPassOrLogin');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization && !authorization.startsWith('Bearer ')) {
    throw new FailPassOrLogin('Необходима авторизация');
    // return res.status(401).send({ message: 'Необходима авторизация' });
  }

  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new FailPassOrLogin('Необходима авторизация');
    // return res.status(401).send({ message: 'Необходима авторизация' });
  }
  req.user = payload;
  return next();
};
