# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all

groceryProducts = Product.create([
    {name: 'bag of pears',
    description: 'one pound bag of pears',
    category: 'groceries',
    price: 9.99},
    {name: 'bundle of carrots',
    description: 'one pound bundle of organic carrots',
    category: 'groceries',
    price: 8.99},
    {name: 'watermelon',
    description: 'whole organic watermelon',
    category: 'groceries',
    price: 6.99},
    {name: 'spaghetti',
    description: 'one pound bag of spaghetti',
    category: 'groceries',
    price: 3.99},
    {name: 'bag of oranges',
    description: 'one pound bag of organic oranges',
    category: 'groceries',
    price: 7.99}
])

bookProducts = Product.create([
    {name: 'Hail Mary',
    description: 'written by andy weir',
    category: 'books',
    price: 18.99}
])