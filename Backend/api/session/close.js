const jwt = require('jwt-simple')
const moment = require('moment')
const mongoose = require('mongoose')
const UserSchema = require('../../models/User')
const User = mongoose.model('User', UserSchema)
const io = require('../../lib/socket').io


module.exports = (req, res) => {
  User
    .findOne({ username: req.body.username })
    .exec((err, user) => {
      if (err) return res.status(500).json(err)
      if (!user) return res.status(404).json({ err: 'Invalid user' })
      console.log("User -------> 🌏", user)
      user.set({ currentlyOnline: false }).save()
      io.emit('removeUser', user)

      return res.status(200).json({ success: true })
    })
}
