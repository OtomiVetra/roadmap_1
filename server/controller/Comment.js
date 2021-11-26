const Comment = require('../model/mongo/Comment');
const list = async (req, res) => {
  const postId = req.query.postId
  const { skip = 0, limit = 10 } = req.query;
  const criteria = {}
  if (postId) { criteria.postId = +postId }
  res.json({
    count: await Comment.countDocuments(criteria),
    items: await Comment.find(criteria).skip(+skip).limit(+limit)
  });
}
const getById = async (req, res) => {
  res.json({
    item: await Comment.findOne({ id: +req.params.id })
  })
}

module.exports = {
  list,
  getById
}