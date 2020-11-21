const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../middlewares/errors/notFoundError');
const NotValidInfo = require('../middlewares/errors/notValidInfo');
const FailPassOrLogin = require('../middlewares/errors/failPassOrLogin');

const { JWT_SECRET } = process.env;

const getUser = (req, res, next) => {
  User.findById(req.user)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Пользователь не найден');
      }
      res.send(user);
    })
    .catch(next);
};

const getUsers = (req, res, next) => {
  User.find({})
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
        res.status(200).send(id);
        return;
      }
      throw new NotFoundError('Пользователь не найден');
    })
    .catch(next);
  // .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
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
      res.status(200).send({ data: user });
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

const login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => {
      if (!user) {
        throw new FailPassOrLogin('Не правильный логин или пароль');
      }
      const id = user._id;
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
};
