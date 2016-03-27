'use strict'

const mongoose = require('mongoose')
const async = require('async')
const UserSchema = require('../models/User')
const User = mongoose.model('User', UserSchema)
const generatePregistrationId = require('../lib/utils')

module.exports = (req, res) => {

  const isUserTaken = (req, done) => {
    User
      .findOne({ username: req.body.username })
      .exec((err, user) => {
        if (err) return done(err)
        if (user) return done({ err: 'Username is already taken' })
        return done()
      })
  }

  const createUser = (req, done) => {
    const newUser = new User({
      userId: generatePregistrationId(),
      username: req.body.username,
      password: req.body.password,
    })
    newUser.save((err, newUser) => {
      if (err) return done(err)
      return done()
    })
  }

  async.series([
    done => isUserTaken(req, done),
    done => createUser(req, done),
  ], (err, user) => {
    if (err) return res.json(err)
    return res.json(user)
  })

}
