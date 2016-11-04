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
        res.sendStatus(204)
      })
    }).catch((err) =>{
      console.log("Couldn't find Candy/Order")
      next(err)
    })
  })
  //delete a specific candy from an order
  .delete('/candy/:id',(req,res,next) =>{
    Order.findById(1)
    .then(order =>{
      Candy.findById(req.params.id)
      .then(candy =>{
        order.removeCandy(candy)
        res.sendStatus(204)
      })
    }).catch((err) =>{
      console.log('cant find candy/order to remove ')
      next(err)
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
  //Get a user by Id (NEEDS TO BE UPDATED TO INCLUDE AUTH)
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
  //Delete a user 
  .delete('/user/:id',(req,res) =>{ 
    User.findById(req.params.id)
    .then(user =>{
      user.destroy()
    }).then(user =>{
      console.log("DELETED ",user)
      res.sendStatus(204)
    })
  })

  /*----------ADMIN ROUTES----------*/
  /*
    ADMIN stuff 
      - Add candy to store tick
      - Set candy status to new status tick 
      - RUD Users  
  */
  //CANDY
  .post('/admin/candy',(req,res) =>{ 
    Candy.create(req.body)
    .then((candy) =>{
      console.log("Created candy ",candy.name)
      res.sendStatus(204)
    })
  })
  .put('/admin/candy/:id/:status',(req,res) =>{ 
    Candy.findById(req.params.id)
    .then((candy) =>{
      candy.update({status:req.params.status})
    }).then((candy) =>{
      console.log("Updated candy status to ",candy.status)
      res.sendStatus(204)
    })
  })
  //USER
  .put('/admin/candy/:id/:status',(req,res) =>{ 
    User.findById(req.params.id)
    .then(user =>{
      user.update({status:req.params.status})
    }).then(user =>{
      console.log("Updated user status to ",user.status)
      res.sendStatus(204)
    })
  })
  .delete('/admin/user/:id',(req,res) =>{ 
    User.findById(req.params.id)
    .then(user =>{
      user.destroy()
    }).then(user =>{
      console.log("DELETED ",user)
      res.sendStatus(204)
    })
  })

  
// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
}) 

// No routes matched? 404.
api.use((req, res) => res.status(404).end())

// {"name": "Test", "short_description": "Test", "description": "Test", "price": 7.5, "quantity": 500, "tags": [], "numOrdered": 0, "status": "Available", "rating": 0, "review": [], "photo": "../Test/Test""}
