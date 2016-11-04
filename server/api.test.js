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
//const fakeCandy = {name: 'Test', short_description: 'Test', description: 'Test', price: 7.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: '../Test/Test'}

describe('/api/candy',() => {
    describe('test creating candy',() => {
      it('adds candy to order',function(){
        const fakeCandy = {'name': 'Test', 'short_description': 'Test', 'description': 'Test', 'price': 7.5, 'quantity': 500, 'tags': [], 'numOrdered': 0, 'status': 'Available', 'rating': 0, 'review': [], 'photo': '../Test/Test'}
        request(app)
          .post('/api/candy')
          .send(fakeCandy)
      })
    })
})
