var myBasket = {
  items: [],
  price: 0,
  discountCard: false,
  price_checker: function(items){
    priceTally = 0
    for(item of items){
      priceTally += (item.price * item.numberOf)
    }
    this.price = priceTally
    if(this.discountCard === true){
      this.price = this.price * 0.95
    }
  } 
}

var testItem = {
  price: 3,
  numberOf: 3
}

var firstItem = {
  price: 5,
  deal: true,
  numberOf: 0
}

var secondItem = {
  price: 2,
  deal: false,
  numberOf: 0
}


module.exports = [myBasket, testItem]