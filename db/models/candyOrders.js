const Sequelize = require('sequelize')
const db = require('APP/db')


const CandyOrder = db.define('candyOrder',{
  quantity:{
    type:Sequelize.INTEGER,
    defaultValue:1
  }
},{
  instanceMethods:{
   increment:function(){
     this.quantity += 1
     this.save()
   },
   decrement:function(){
     if(this.quantity === 1){
       this.destroy()
     }
     else{
       this.quantity -= 1
       this.save()  
     }
   
   }  
  }

})

module.exports = CandyOrder


