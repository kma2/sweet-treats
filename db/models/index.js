'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const User = db.define('users', {
  name: Sequelize.STRING,  
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true
		}
  },
  status:{
    type: Sequelize.STRING,
    defaultValue: 'Customer'
  },
  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING,
	password: Sequelize.VIRTUAL
}, {
	indexes: [{fields: ['email'], unique: true}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword
  },
  instanceMethods: {
    authenticate(plaintext) {
      console.log('password',plaintext)
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        )
    }    
  }
})

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return new Promise((resolve, reject) =>
	  bcrypt.hash(user.get('password'), 10, (err, hash) => {
		  if (err) reject(err)
		  user.set('password_digest', hash)
      resolve(user)
	  })
  )
}

// const User = require('./user')
const Candy = require('./candy')
const Order = require('./order')
const UserOrder = require('./UserOrders')
const CandyOrder = require('./candyOrders')

Order.belongsToMany(Candy, {through:CandyOrder})
Candy.belongsToMany(Order, {through:CandyOrder})
User.hasMany(Order)
Order.belongsTo(User)

module.exports = {User,Candy,Order}
