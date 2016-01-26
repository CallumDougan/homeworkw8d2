var myBasket = {
  items: [],
  price: 0,
  discount_card: true,
  price_checker: function(items){
    priceTally = 0
    for(item of items){
      priceTally += (item.price * item.number_of)
    }
    this.price = priceTally
  } 
}

var testItem = {
  price: 3,
  number_of: 3
}

var firstItem = {
  price: 5,
  deal: true,
  number_of: 0
}

var secondItem = {
  price: 2,
  deal: false,
  number_of: 0
}


module.exports = [myBasket, testItem]