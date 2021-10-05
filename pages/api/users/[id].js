const User = require("../../../model/User");

export default function handler(req, res) {
  res.json({
    item: User.getById(+req.query.id)
  })
}
