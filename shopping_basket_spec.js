var basket = require('./shopping_basket')[0];
var testItem = require('./shopping_basket')[1]
var assert = require('assert');

describe('basket', function(){
  it('should add prices together', function(){
    basket.items.push(testItem)
    basket.price_checker(basket.items);
    assert.equal(9, basket.price)
  });

  it('should apply discount card effects', function(){
    basket.discountCard = true
    basket.price_checker(basket.items);
    assert.equal(8.549999999999999, basket.price)
  })
})