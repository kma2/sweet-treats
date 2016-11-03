'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()
const Candy = require('APP/db/models/candy')
const Order = require('APP/db/models/order')
// const fakeCandy = {name: 'Test', short_description: 'Test', description: 'Test', price: 7.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: '../Test/Test'}

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .post('/candy',(req,res) => {
    //Test add candy to order
    //request body {candy}
    console.log("IN POST",req.body)
    // Order.findOne({
    //   where:{
    //     id:1
    //   }
    // }).then(function(e){
    //   console.log('afoinasoinfioandoifgnsdoignopiasn')
    //   res.sendStatus(204)
    // })
    // res.sendStatus(204)
    Order.findOne({
      where:{
        id:1
      }
    }).then(function(order){
      console.log("ORDER",order)
      order.addCandy(candyOrders,req.body)
    res.sendStatus(204)
    }).catch(function(){
      console.log("ERRRRR")
      res.sendStatus(999)
    })
  })

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())

// {"name": "Test", "short_description": "Test", "description": "Test", "price": 7.5, "quantity": 500, "tags": [], "numOrdered": 0, "status": "Available", "rating": 0, "review": [], "photo": "../Test/Test""}
