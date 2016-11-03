const Sequelize = require('sequelize')
const db = require('APP/db')


const Order = db.define('order',{
  status:{
    type:Sequelize.STRING,
    defaultValue:'unordered'
  }
},{
  instanceMethods:{
    checkout:()=>{
      this.status = 'checkout'
    }
  },

})

module.exports = Order


/*
  I'm looking for a software engineering internship in any of the 3 school terms;winter,spring and summer'
 */
