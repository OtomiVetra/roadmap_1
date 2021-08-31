const express = require('express');
const cors = require('cors');
const User = require('./model/User');
const Post = require('./model/Post');
const Comment = require('./model/Comment');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.static('public'))


app.get('/users', (req, res) => {
  res.json({
    items: User.list()
  });
});
app.get('/users/:id', (req, res) => {
  res.json({
    item: User.getById(+req.params.id)
  })
});

app.get('/posts', (req, res) => {
  const userId = req.query.userId
  // const {userId} = req.query
  res.json({
    items: Post.list(+userId)
  });
});

app.get('/posts/:id', (req, res) => {
  res.json({
    item: Post.getById(+req.params.id)
  })
});
app.get('/comments', (req, res) => {
  const postId = req.query.postId

  res.json({
    items: Comment.list(+postId)
  });
});

app.get('/comments/:id', (req, res) => {
  res.json({
    item: Comment.getById(+req.params.id)
  })
});


app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});