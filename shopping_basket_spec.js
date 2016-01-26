var basket = require('./shopping_basket')[0];
var testItem = require('./shopping_basket')[1];
var dealItem = require('./shopping_basket')[2];
var assert = require('assert');

describe('basket', function(){
  it('should add prices together', function(){
    basket.items.push(testItem);
    basket.price_checker(basket.items);
    assert.equal(9, basket.price);
    basket.items = [];
  });

  it('should apply discount card effects', function(){
    basket.discountCard = true;
    basket.items.push(testItem);
    basket.price_checker(basket.items);
    assert.equal(8.549999999999999, basket.price);
    basket.discountCard = false;
    basket.items = [];
  });

  it('should apply >£20 discount', function(){
    basket.items.push(testItem, testItem, testItem);
    basket.price_checker(basket.items);
    assert.equal(24.3, basket.price);
    basket.items = [];
  });

  it('should recognise 2 for 1 deals', function(){
    basket.items.push(dealItem);
    basket.price_checker(basket.items);
    assert.equal(5, basket.price);
    basket.items = [];

  })
})