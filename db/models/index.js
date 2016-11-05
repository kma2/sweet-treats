'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Candy = require('./candy')
const Order = require('./order')
const CandyOrder = require('./candyOrders')

Order.belongsToMany(Candy, {through:CandyOrder})
Candy.belongsToMany(Order, {through:CandyOrder})
// User.belongsToMany(Order,{through:'userOrders'})


module.exports = {User,Candy,Order}
