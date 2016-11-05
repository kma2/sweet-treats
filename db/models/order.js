const Sequelize = require('sequelize')
const db = require('APP/db')


const Order = db.define('order',{
  status:{
    type:Sequelize.STRING,
    defaultValue:'pending'
  }
},{
  instanceMethods:{
    checkout:()=>{
      this.status = 'checkout'
    }
  },

})

module.exports = Order


