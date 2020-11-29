const Card = require('../models/card');
const NotFoundError = require('../middlewares/errors/notFoundError');
const NotValidInfo = require('../middlewares/errors/notValidInfo');

const getCards = async (req, res, next) => {
  Card.find({})
    .then((card) => {
      if (card) {
        res.status(200).send(card);
      }
    })
    .catch(next);
};

const createCard = async (req, res, next) => {
  const owner = req.user._id;
  Card.create({ owner, ...req.body })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new NotValidInfo('Переданы некорректные данные');
      }
      next(err);
    });
};

const deleteCard = async (req, res, next) => {
  await Card.findByIdAndDelete(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Такой карточки нет');
      } else if (card.owner.toString() !== req.user._id) {
        throw new NotFoundError('Нельзая удалить чужую карточку');
      }
      res.send(card);
    })
    .catch(next);
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};
