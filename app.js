const express = require('express');
const User = require('./model/User');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
   res.send('Server Index Page');
});
app.get('/users', (req, res) => {
   res.json({
      items: User.list()
   });
});

app.get('/users/:id', (req, res) => {
   res.json({
      item: User.getById(+req.params.id)
   });
});


app.listen(PORT, () => {
   console.log(`Server app listening at http://localhost:${PORT}`);
});