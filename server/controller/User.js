const User = require('../model/mongo/User');

const list = async (req, res) => {
  const { skip = 0, limit = 10 } = req.query;
  res.json({
    count: await User.countDocuments(),
    items: await User.find().skip(+skip).limit(+limit)
  });
}
const getById = async (req, res) => {
  res.json({
    item: await User.findOne({ id: +req.params.id })
  })
}
module.exports = {
  list,
  getById
}