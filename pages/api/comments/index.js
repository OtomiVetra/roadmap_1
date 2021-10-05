const Comment = require('../../../model/Comment');

export default function handler(req, res) {
  const postId = req.query.postId

  res.json({
    items: Comment.list(+postId)
  });
}