require("dotenv").config();
const express = require('express');
const cors = require('cors');
require("./model/mongo/db");
const UserController = require('./controller/User');
const PostController = require('./controller/Post');
const CommentController = require('./controller/Comment');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.static('public'))


app.get('/users', UserController.list);
app.get('/users/:id', UserController.getById);

app.get('/posts', PostController.list);
app.get('/posts/:id', PostController.getById);

app.get('/comments', CommentController.list);
app.get('/comments/:id', CommentController.getById);


app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});