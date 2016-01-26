var basket = require('./shopping_basket')[0];
var testItem = require('./shopping_basket')[1]
var assert = require('assert');

describe('basket', function(){
  it('should add prices together', function(){
    basket.items.push(testItem)
    basket.price_checker(basket.items);
    assert.equal(9, basket.price)
  })
})