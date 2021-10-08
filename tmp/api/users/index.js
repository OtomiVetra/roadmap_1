const User = require('../../../model/User');

export default function handler(req, res) {
  res.json({
    items: User.list()
  });
}