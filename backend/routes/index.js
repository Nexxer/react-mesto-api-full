const router = require('express').Router();
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const errorUrlRouter = require('./errorUrl');

router.use(
  usersRouter,
  cardsRouter,
  errorUrlRouter,
);

module.exports = router;
