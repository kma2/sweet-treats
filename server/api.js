'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()
const Candy = require('APP/db/models/candy')

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .get('/candy',(req,res) => {
    // Order.findOrCreate({
    //   where:{
    //     id:req.body.order.id
    //   }
    //   }).then(order => {
    //     order.addCandy(req.body.candy)
    //   })
    // Order.create({})
     var candy = Candy.create({
        name:'Candy test',
        photo:'www.examplePhoto.com',
        description:'Test description',
        quantity:50,
        tags:['tag1','tag2'],
        price:3.50
      })
    res.send('500')

    })

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
