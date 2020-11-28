// const { JWT_SECRET = 'secret' } = process.env;
// const jwt = require('jsonwebtoken');
// const FailPassOrLogin = require('./errors/failPassOrLogin');

// module.exports = (req, res, next) => {
//   const { authorization } = req.headers;
//   if (!authorization && !authorization.startsWith('Bearer ')) {
//     throw new FailPassOrLogin('Необходима авторизация auth');
//     // return res.status(401).send({ message: 'Необходима авторизация' });
//   }

//   const token = authorization.replace('Bearer ', '');
//   let payload;
//   try {
//     payload = jwt.verify(token, JWT_SECRET);
//   } catch (err) {
//     throw new FailPassOrLogin('Необходима авторизация auth playpload');
//     // return res.status(401).send({ message: 'Необходима авторизация' });
//   }
//   req.user = payload;
//   return next();
// };

const jwt = require('jsonwebtoken');

const handleAuthError = (res) => {
  res.status(401).send({ message: 'Необходима авторизация' });
};

const extractBearerToken = (header) => header.replace('Bearer ', '');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return handleAuthError(res);
  }
  const token = extractBearerToken(authorization);

  let payload;
  try {
    payload = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return handleAuthError(res);
  }
  req.user = payload; // записываем пейлоуд в объект запроса
  return next(); // пропускаем запрос дальше
};
