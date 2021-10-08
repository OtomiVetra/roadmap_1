const Post = require("../../../model/Post");

export default function handler(req, res) {
  res.json({
    item: Post.getById(+req.query.id)
  })
}
