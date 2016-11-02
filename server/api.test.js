const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const User = require('APP/db/models/user')
const app = require('./start')
const Order = require('APP/db/models/order')
const Candy = require('APP/db/models/candy')

describe('/api/users', () => {
  // describe('when not logged in', () => {
  //   it('GET /:id fails 401 (Unauthorized)', () =>
  //     request(app)
  //       .get(`/api/users/1`)
  //       .expect(401)
  //   )    

  //   it('POST creates a user', () =>
  //     request(app)
  //       .post('/api/users')
  //       .send({
  //         email: 'beth@secrets.org',
  //         password: '12345'
  //       })
  //       .expect(201)
  //   )

  //   it('POST redirects to the user it just made', () =>
  //     request(app)
  //       .post('/api/users')
  //       .send({
  //         email: 'eve@interloper.com',
  //         password: '23456',
  //       })
  //       .redirects(1)
  //       .then(res => expect(res.body).to.contain({
  //         email: 'eve@interloper.com'
  //       }))        
  //   )
  // })
})
describe('/api/candy',() => {
    describe('test creating candy',() => {
      var order = Order.create({})
      var candy = Candy.create({
        name:'Candy test',
        photo:'www.examplePhoto.com',
        description:'Test description',
        quantity:50,
        tags:['tag1','tag2'],
        price:3.50
      })
      console.log(candy)
      var objToSend = {order:order,candy:candy}
      it('Creates right shit',() => {
        request(app)
          .post('/api/candy')
          .send(objToSend)
      })
    })
})
"I'm looking for a Software Engineering internship during either the "