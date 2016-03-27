'use strict'

const randomkey = require('randomkey')

const generatePregistrationId = () => {
  return 'ID' + randomkey(4, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890');
}

module.exports = generatePregistrationId
