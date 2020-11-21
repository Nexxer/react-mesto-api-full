const errorUrl = require('express').Router();
const NotFoundError = require('../middlewares/errors/notFoundError');

errorUrl.get('*', (req, res, next) => {
  const err = new NotFoundError('Запрашиваемый ресурс не найден');
  next(err);
});

module.exports = errorUrl;
