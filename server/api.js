'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()
const Candy = require('APP/db/models/candy')
const Order = require('APP/db/models/order')
const User = require('APP/db/models/user')
// const UserOrders = require('APP/db/models/UserOrders')
const bcrypt = require('bcrypt')

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))

  /*----------CANDY ROUTES----------*/

  // adding a candy to an order
  .post('/candy/:id',(req,res,next) => {
    Order.findById(1)
    .then(order =>{
      Candy.findById(req.params.id)
      .then(candy =>{
        order.addCandy(candy)
        res.sendStatus(200)
      })
    }).catch((err) =>{
      console.log("Couldn't find Candy/Order")
      next(err)
    })
  })

  // delete a specific candy from an order
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

  // get all candies
  .get('/candy',(req,res) =>{
    if (!req.session.cart) {
      req.session.cart = {};
      req.session.cart.order = {};
    }
    Candy.findAll({})
    .then((candies) =>{
      res.send(candies)
    })
  })

  // get candy by id
  .get('/candy/:id',(req,res) =>{
    Candy.findById(req.params.id)
    .then((candy) =>{
      res.send(candy)
    })
  })


  /*----------USER ROUTES----------*/

  // user can logout
   .get('/user/logout',(req,res) =>{
     req.session = null
     res.sendStatus(204)
  })

  // get a user by Id (NEEDS TO BE UPDATED TO INCLUDE AUTH)
  .get('/user/:id',(req,res) =>{
    User.findById(req.params.id)
    .then(user =>{
      res.send(user)
    })
  })

  // update a user
  .put('/user/:id',(req,res) =>{
    User.update(req.body,{
      where:{
        id: req.params.id
      },
      returning: true
    }).then(() =>{
      res.sendStatus(200)
    })
  })

  // delete a user
  .delete('/user/:id',(req,res) =>{
    User.findById(req.params.id)
    .then(user =>{
      user.destroy()
    }).then(user =>{
      res.sendStatus(204)
    })
  })

  // register a new user
  .post('/user/register',(req,res) =>{
    User.create(req.body)
    .then(user =>{
      req.session.user = user
      res.status(201).send(user)
    })
  })

  // user can login
  .post('/user/login',(req,res) => {
    User.findOne({
      where:{
        email:req.body.email
      }
    }).then(user => {
      user.authenticate(req.body.password)
      .then((binary) => {
        if(binary) {
          console.log(req.body.password)
          console.log('logged in')
          req.session.user = user
          res.sendStatus(200)
        }
        else {
          res.sendStatus(401)
        }
      })
    }).catch(err => {
      // NEED TO UPDATE TO REDIRECT AND SEND USER A MESSAGE
      res.sendStatus(403)
    })
  })

  /*----------ADMIN ROUTES----------*/

  // get all orders of a particular user
  .get('/admin/:userId/order', (req, res) => {
    Order.findAll({
      where: {
        user_id : req.params.userId
      },
      include: [{model: userOrders}]
    })
    .then(orders => res.send(orders))
    .catch(next)
  })

  //get a specific order 
  .get('/order/:orderId',(req,res) =>{
    Order.findById(req.params.orderId)
    .then(order =>{
      res.send(order)
    })
  })

  // update an order to change status(admin)
  .put('/admin/order/:userId',(req,res) =>{
    Order.findById(req.params.userId)
    .then(order =>{
      order.update(req.body)
    })
  })


  // create a new candy
  .post('/admin/candy',(req,res) =>{
    Candy.create(req.body)
    .then((candy) =>{
      console.log("Created candy ",candy.name)
      res.sendStatus(201)
    })
  })

  // update a candy's status
  .put('/admin/candy/:id/:status',(req,res) =>{
    Candy.findById(req.params.id)
    .then((candy) =>{
      candy.update({status:req.params.status})
    }).then((candy) =>{
      console.log("Updated candy status to ",candy.status)
      res.sendStatus(204)
    })
  })

  // update a user's status
  .put('/admin/candy/:id/:status',(req,res) =>{
    User.findById(req.params.id)
    .then(user =>{
      user.update({status:req.params.status})
    }).then(user =>{
      console.log("Updated user status to ",user.status)
      res.sendStatus(204)
    })
  })

  // delete a user
  .delete('/admin/user/:id',(req,res) =>{
    User.findById(req.params.id)
    .then(user =>{
      user.destroy()
    }).then(user =>{
      console.log("DELETED ",user)
      res.sendStatus(204)
    })
  })

  /*----------CHECKOUT ROUTE----------*/

  .get('/checkout', (req, res) => {
    if (req.session.user) {

      Object.assign({}, req.session.cart.order, req.session.user)
    }
  })


// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
