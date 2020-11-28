const usersRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const auth = require('../middlewares/auth');
const {
  getUsers,
  getUserId,
  createUser,
  login,
  getUser,
  // setUserInfo,
} = require('../controllers/users');

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

// usersRouter.post('/users', createUser);

usersRouter.use(auth);

usersRouter.get('/users', getUsers);

usersRouter.get('/users/me', getUser);

usersRouter.get('/users/:id',
  // celebrate({
  //   params: Joi
  //     .object()
  //     .keys({
  //       userId: Joi
  //         .string()
  //         .length(24),
  //     }),
  // }),
  getUserId);

// usersRouter.patch('/users/me', setUserInfo);

module.exports = usersRouter;
