'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Candy = require('./candy')
const Order = require('./order')
const UserOrder = require('./UserOrder')
//**THIS PRINTS OUT AN EMPTY OBJECT, SHOULD PRINT MODEL NAME (USERS)**//
console.log("model is ", User)

Order.belongsToMany(Candy, {through:'candyOrders'})
Candy.belongsToMany(Order, {through:'candyOrders'})
// User.belongsToMany(Order,{through: UserOrder})



module.exports = {User,Candy,Order}
