const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../middlewares/errors/notFoundError');
const NotValidInfo = require('../middlewares/errors/notValidInfo');
const FailPassOrLogin = require('../middlewares/errors/failPassOrLogin');

const { JWT_SECRET = 'secret' } = process.env;

const getUser = async (req, res, next) => {
  await User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден');
      }
      // res.status(200).send(user);
      res.send(user);
    })
    .catch(next);
};

const getUsers = async (req, res, next) => {
  await User.find({})
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      }
      throw new NotFoundError('Пользователь не найден');
    })
    .catch(next);
  // .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
};

const getUserId = (req, res, next) => {
  User.findById(req.params.id)
    .then((id) => {
      if (id) {
        // res.status(200).send(id);
        res.send(id);
        return;
      }
      throw new NotFoundError('Пользователь не найден');
    })
    // .catch(next);
    .catch(() => res.status(500).send({ message: 'При создании пользователя ошибка' }));
};

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден');
      }
      // res.status(200).send({ data: { id: user._id, email: user.email } });
      res.send({ data: { id: user.id, email: user.email } });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new NotValidInfo('Переданы некорректные данные');
      }
      next(err);
      // if (err.name === 'ValidationError') {
      //   res.status(400).send({ message: 'Переданы некорректные данные' });
      // }
      // res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

// const setUserInfo = (req, res, next) => {
//   const { name, about } = req.body;
//   User.findByIdAndUpdate(
//     req.user._id,
//     { name, about },
//     { new: true, runValidators: true },
//   )
//     .then((user) => res.send({ data: user }))
//     .catch(next);
// };

const login = async (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      if (!user) {
        throw new FailPassOrLogin('Не правильный логин или пароль');
      }
      const { id } = user;
      const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '7d' });
      res.send({ token, id });
    })
    .catch(next);
  // .catch((err) => {
  // next(err);
  // //res.status(401).send({ message: err.message });
  // });
};

module.exports = {
  getUsers,
  getUserId,
  createUser,
  login,
  getUser,
  // setUserInfo,
};
