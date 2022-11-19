const Pizza = require('./Pizza.js')
const pepperoni = new Pizza();

pepperoni.setBase('Whole Wheat');
pepperoni.setSauce('Tomato Basil');
pepperoni.setCheese('Smoked Mozzarella');
pepperoni.setToppings(['Pepperoni', 'Basil']);

pepperoni.bake();