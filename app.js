require("dotenv").config();
const express = require('express');
const cors = require('cors');
require("./model/mongo/db");
const User = require('./model/mongo/User');
const Post = require('./model/mongo/Post');
const Comment = require('./model/mongo/Comment');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.static('public'))


app.get('/users', async (req, res) => {
  res.json({
    items: await User.find()
  });
});
app.get('/users/:id', async (req, res) => {
  res.json({
    item: await User.findOne({ id: +req.params.id })
  })
});

app.get('/posts', async (req, res) => {
  const userId = req.query.userId
  // const {userId} = req.query
  res.json({
    items: await Post.find({ userId: +userId })
  });
});

app.get('/posts/:id', async (req, res) => {
  res.json({
    item: await Post.findOne({ id: +req.params.id })
  })
});
app.get('/comments', async (req, res) => {
  const postId = req.query.postId

  res.json({
    items: await Comment.find({ postId: +postId })
  });
});

app.get('/comments/:id', async (req, res) => {
  res.json({
    item: await Comment.findOne({ id: +req.params.id })
  })
});


app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});