'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()
const Candy = require('APP/db/models/candy')
const Order = require('APP/db/models/order')
const User = require('APP/db/models/user')
// const fakeCandy = {name: 'Test', short_description: 'Test', description: 'Test', price: 7.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: '../Test/Test'}

//ROUTES TO DO 
/*
  Admin routes 
  User routes 
  Order routes 
  Fix candy bs
*/ 



api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  //Adding a candy to an order
  .post('/candy/:id',(req,res,next) => {
    Order.findById(1)
    .then(order =>{
      Candy.findById(req.params.id)
      .then(candy =>{
        //Now we have candy and order 
        //Time to associate them 
        //candy meet order, order meet candy 
        order.addCandy(candy)
      })
    }).catch((err) =>{
      console.log("Couldn't find Candy/Order")
      next(err)
    })
  })
  //delete a specific candy from an order
  .delete('/candy/:id',(req,res) =>{
    Order.findById(1)
    .then((order) =>{
      order.removeCandy(req.body)
    })
  })
  //Update a specific candy in an order
  // .put('/candy',(req,res) =>{
  //   Order.findById(1)
  //   .then(order =>{
  //     order.setCandy(Candy,req.body)
  //   })
  // })
  .get('/candy',(req,res) =>{
    Candy.findAll({})
    .then((candies) =>{
      res.send(candies)
    })
  })

  .get('/candy/:id',(req,res) =>{
    Candy.findById(req.params.id)
    .then((candy) =>{
      res.send(candy)
    })
  })
  //Get a user by Id
  .get('/user/:id',(req,res) =>{
    User.findById(req.params.id)
    .then(user =>{
      res.send(user)
    })
  })
  //Update a user 
  .put('/user/:id',(req,res) =>{ 
    User.update(req.body,{
      where:{
        id: req.params.id
      },
      returning: true
    }).then(() =>{
      res.sendStatus(204)
    })
  })
  //Add a user
  .post('/user',(req,res) =>{
    User.create(req.body)
    .then((user) =>{
      res.send(user)
    })
  })

  
// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
}) 

// No routes matched? 404.
api.use((req, res) => res.status(404).end())

// {"name": "Test", "short_description": "Test", "description": "Test", "price": 7.5, "quantity": 500, "tags": [], "numOrdered": 0, "status": "Available", "rating": 0, "review": [], "photo": "../Test/Test""}
