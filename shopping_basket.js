var myBasket = {
  items: [],
  price: 0,
  discountCard: false,
  price_checker: function(items){
    priceTally = 0
    for(item of items){
      if(item.deal === true){
        item.numberOf = (item.numberOf / 2)
      }
      priceTally += (item.price * item.numberOf)
    }
    this.price = priceTally

    if(this.price > 20){
      this.price = this.price * 0.9
    }

    if(this.discountCard === true){
      this.price = this.price * 0.95
    }

  } 
}

var testItem = {
  price: 3,
  numberOf: 3
}

var dealItem = {
  price: 5,
  deal: true,
  numberOf: 2
}


module.exports = [myBasket, testItem, dealItem]