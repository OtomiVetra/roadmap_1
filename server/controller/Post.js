const Post = require('../model/mongo/Post');
const list = async (req, res) => {
  const userId = req.query.userId
  const { skip = 0, limit = 10 } = req.query;
  const criteria = {};
  if (userId) { criteria.userId = +userId };
  res.json({
    count: await Post.countDocuments(criteria),
    items: await Post.find(criteria).skip(+skip).limit(+limit)
  });
}
const getById = async (req, res) => {
  res.json({
    item: await Post.findOne({ id: +req.params.id })
  })
}
module.exports = {
  list,
  getById
}