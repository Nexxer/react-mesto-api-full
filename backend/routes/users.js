const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');
const {
  getUsers,
  getUserId,
  createUser,
  login,
  getUser,
} = require('../controllers/users');

usersRouter.post('/signin', celebrate({
  body: Joi
    .object()
    .keys({
      email: Joi
        .string()
        .required()
        .email(),
      password: Joi
        .string()
        .required()
        .min(1),
    }),
}), login);

usersRouter.post('/signup', celebrate({
  body: Joi
    .object()
    .keys({
      email: Joi
        .string()
        .required()
        .email(),
      password: Joi
        .string()
        .required()
        .min(1),
    }),
}), createUser);

// usersRouter.post('/users', createUser);

usersRouter.use(auth);

usersRouter.get('/users', getUsers);

usersRouter.get('/users/:id', celebrate({
  params: Joi
    .object()
    .keys({
      userId: Joi
        .string()
        .length(24),
    }),
}), getUserId);

usersRouter.get('/users/me', getUser);

module.exports = usersRouter;
