const NotFound = require('../errors/notFound');
const User = require('../models/User');

const { OK_CODE } = require('../states/states');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    if (!users) {
      next(new NotFound('There is no users'));
      return;
    }
    res.status(OK_CODE).send(users);
  } catch (e) {
    next(new ServerError('Some bugs on server'));
  }
};

module.exports = {
  getUsers
};