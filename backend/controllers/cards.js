const Card = require('../models/card');
const NotFoundError = require('../middlewares/errors/notFoundError');
const NotValidInfo = require('../middlewares/errors/notValidInfo');

const getCards = (req, res, next) => {
  Card.find({})
    .then((card) => {
      if (card) {
        res.status(200).send(card);
      }
      throw new NotFoundError('Такой карточки нет');
    })
    .catch(next);
  // .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
};

const createCard = (req, res, next) => {
  const owner = req.user._id;
  Card.create({ owner, ...req.body })
    .then((card) => {
      res.status(200).send({ data: card });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new NotValidInfo('Переданы некорректные данные');
        // res.status(400).send({ message: 'Переданы некорректные данные' });
      }
      next(err);
      // res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

const deleteCard = (req, res, next) => {
  Card.findByIdAndDelete(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Такой карточки нет');
      } else if (card.owner !== req.user._id) {
        throw new NotFoundError('Нельзая удалить чужую карточку');
        // res.status(404).send({ message: 'Нельзая удалить чужую карточку' });
      }
      res.status(200).send(card);
    })
    .catch(next);
  // .catch(() => res.status(500).send({ message: 'На сервере произошла ошибка' }));
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};
