const db = require('APP/db')
const Candy =  require('APP/db/models/candy')
const Order =  require('APP/db/models/order')
const Promise = require('bluebird')
const Sequelize = require('sequelize')
const app = require('APP')

  const arrCandy = [
      {name: 'Stout Pints', short_description: 'Imported from Germany', description: 'A combination of roasty chocolate and creamy vanilla flavor', price: 7.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/stout-pints.jpg'},
      {name: 'Red Velvet Caramels', short_description: 'Made in the U.S.', description: 'Rich red velvet cake is blended with smooth artisan caramel, then dipped in a tangy cream cheese frosting.', price: 6, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/red_velvet_caramels.jpg'},
      {name: 'Pastel Pearls', short_description: 'Imported from Greece', description: 'Tiny milk chocolate droplets are dipped in a delicate sugar shell, in soft and sweet pastel hues. Perfect for decorating cakes, cupcakes, ice cream sundaes and more!', price: 7, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/pastel-pearls.jpg'},
      {name: 'Strawberry Milkshake', short_description: 'Made in the U.S.', description: 'A delicious milkshake in one bite, these strawberry and cream malt balls are a summertime favorite.', price: 7.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/strawberry-milkshake.jpg'},
      {name: 'Watermelon Slices', short_description: 'Imported from Germany', description: 'Taste the sweet summer flavor of fresh and juicy watermelon with a delicious sour twist.', price: 7, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/watermelon_slices.jpg'},
      {name: 'Super Sour Hearts', short_description: 'Imported from England', description: 'Super sour. Eye-crinkling, mouth-puckering, taste-bud-smashing sour.', price: 6, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/super-sour-hearts.jpg'},
      {name: 'Royal Roses', short_description:'Made in the UK', description: 'These beautiful roses are blooming with all-natural flavors of strawberry, raspberry, cherry, and black currant.', price: 5.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/royal-roses.jpg'},
      {name: 'Dark Chocolate Marshmallow Eggs', short_description: 'Made in the U.S.', description: 'A fluffy vanilla marshmallow is dipped in rich dark chocolate and a crunchy candy shell', price: 7.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/dark-chocolate-marshmallow-eggs.jpg'},
      {name: 'Kyoto Blossoms', short_description: 'Imported from Japan', description: 'Delicate, sweet and chic, these tiny sugar flowers are steeped in a rich tradition. Introduced to the Japanese in the early 1600’s by Portuguese traders, these beautiful blossoms soon became a symbol of Japanese hospitality.', price: 7, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/kyoto-blossoms.jpg'},
      {name: 'Martini Olive Almonds', short_description: 'Made in the U.S.', description: 'A fresh-roasted California almond is dipped in creamy white chocolate, then painted to resemble a martini olive.', price: 6.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/martini-olive-almonds.jpg'},
      {name: 'Matcha Green Tea Caramels', short_description: 'Imported from France', description: 'These rich & creamy caramels are dipped in white chocolate infused with matcha green tea.', price: 7, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/matcha-green-tea-caramels.jpg'},
      {name: 'Parisian Pineapples', short_description: 'Imported from France', description: 'From Paris with love, these darling baby pineapples are made with fresh pineapple purée for an all-natural tropical treat.', price: 7.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/parisian-pineapples.jpg'},
      {name: 'Berry Vanilla Pies', short_description: 'Imported from Sweden', description: 'Puffy soft and light as air, these heavenly bites have a delicate crunch from the sugar coating.', price: 6.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/berry-vanilla-pies.jpg'},
      {name: 'Pumpkin Pie Caramels', short_description: 'Made in the U.S.', description: 'A soft, smooth caramel is surrounded by sweet pumpkin white chocolate, infused with delicate notes of cinnamon, nutmeg, cardamom and allspice.', price: 9, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/pumpkin-pie-caramels.jpg'},
      {name: 'Rose All Day Bears', short_description: 'Imported from Sweden', description: 'Your candy wishes just got a lot more delicious (and a lot more adorable) with these bears infused with Whispering Angel Rosé.', price: 9.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/rose-bears.jpg'},
      {name: 'Chocolate Berry Basket', short_description: 'Imported from Mexico', description: "A mixed berry basket, this assortment combines our farmer's market blackberries and raspberries.", price: 10, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/berry_basket.jpg'},
      {name: 'Smores Marshmallows', short_description: 'Made in the U.S.', description: "Hand-crafted and light as air, these little marshmallows bring the campfire to you in a delicious morsel of s'mores goodness.", price: 15, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/smores-marshmallows.jpg'},
      {name: 'Blood Orange Fruttini', short_description: 'Imported from Italy', description: 'These juicy, tiny fruit gems are infused with blood orange nectar, then rolled in extra-fine Italian sugar crystals.', price: 8.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/blood-orange-fruttini.jpg'},
      {name: 'Beach Buddies', short_description: 'Imported from Canada', description: "Life's a beach with this playful mix of dolphins, seahorses, turtles, octopi, sharks and fish in yummy fruit flavors.", price: 7, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/beach-buddies.jpg'},
      {name: 'Sour Fizz Cola Cuties', short_description: 'Imported from Germany', description: 'These all-natural gummy cola bottles have a tantalizing twist of fizzy sour flavor.', price: 7.5, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/sour-fizz-cola-cuties.jpg'},
      {name: 'Beary Smoothie', short_description: 'Imported from Portugal', description: 'Sweet berry juice is blended with creamy frozen yogurt in these bear-shaped, berrylicious bites.', price: 7, quantity: 500, tags: [], numOrdered: 0, status: 'Available', rating: 0, review: [], photo: 'product_photos/beary-smoothie.jpg'}
  ]
  const arrOrder = [{}]

// db.didSync
//   .then(() => db.sync({force: true}))
//   .then(function(){
//     arrCandy.forEach(e => Candy.create(e))
//   }).then(() => {
//     arrOrder.forEach(e => Order.create(e))
//   })
//   .catch(error => console.error(error))    


const seedCandy = () => {
  db.Promise.map(arrCandy,(candy) => {
    db.model('candy').create(candy)
  })
}

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedCandy)
  .then(() =>{
    console.log("WELL DONE SEEDED WELL")
  })
  .catch(error => console.error(error))    


//  {"name":"Stout Pints","short_description": "Imported from Germany", "description": "A combination of roasty chocolate and creamy vanilla flavor", "price": 7.5, "quantity": 500, "tags": [], "numOrdered": 0, "status": "Available", "rating": 0, "review": [], "photo": "../public/stout-pints.jpg"}


