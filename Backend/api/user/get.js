const mongoose = require('mongoose')
const UserSchema = require('../../models/User')
const User = mongoose.model('User', UserSchema)

module.exports = (req, res) => {
  User
    .find()
    .where('currentlyOnline', true)
    .exec((err, users) => {
      if (err) return res.status(500).json(err)
      if (!users) return res.status(404).json({ err: 'No users available' })

      return res.status(200).json(users)
    })
}
