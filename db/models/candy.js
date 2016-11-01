const Sequelize = require('sequelize')
const db = require('APP/db')


const Candy = db.define('candy',{
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  photo:{
    type:Sequelize.STRING,
    allowNull:false,
    validate:{
      isUrl:true
    }
  },
  description:{
    type:Sequelize.TEXT,
    allowNull:false
  },
  quantity:{
    type:Sequelize.INTEGER,
    allowNull:false
  },
  tags:{
    type:Sequelize.ARRAY(Sequelize.STRING),
    allowNull:false 
  },
  price:{
    type:Sequelize.FLOAT,
    allowNull:false
  },
  review:{
    type:Sequelize.ARRAY(Sequelize.INTEGER),
    defaultValue:[]
  },
  numOrdered:{
    type:Sequelize.INTEGER,
    defaultValue:0
  },
  status:{
    type:Sequelize.STRING,
    defaultValue:'Available'
  }
},{
  instanceMethods:{
    availability:() =>{
      const quantity = this.quantity
      if(quantity<100){
        return quantity === 1 ? `${quantity} candy left` : `${quantity} candies left`
      }
      return false
    },
    addReview:(review) =>{
      this.review.push(review)
    },
    updateOrdered:() => this.numOrdered += 1,
    discountinue:() => this.status = 'Discontinued'
  }, 
  getterMethods:{

  } 
}
)

module.exports = Candy
