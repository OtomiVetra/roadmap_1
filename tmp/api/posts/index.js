const Post = require('../../../model/Post');

export default function handler(req, res) {
  const userId = req.query.userId
  // const {userId} = req.query
  res.json({
    items: Post.list(+userId)
  });
}