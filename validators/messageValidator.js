const { body } = require('express-validator');

const setMessageValidator = [
  body('username', 'Username is required')
    .exists()
    .not()
    .isEmpty()
    .trim()
    .escape(),
  body('text', 'Text message is required')
    .exists()
    .isString()
    .not()
    .isEmpty()
    .trim()
    .escape(),
];

module.exports = { setMessageValidator };
