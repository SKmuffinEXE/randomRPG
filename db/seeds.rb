# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding users"

# User.create(username: "testing", password: "abcd", image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png")

puts "seeding characters"

# Character.create(name: "Tommy", health: 20, mhealth: 20, mana: 20, mmana: 20, str: 8, int: 8, dex: 8, speed: 8, con: 8, wis: 8, gold: 10, level: 1, points: 5, killcount: 0, user_id: 1)

puts "creating enemies!"

# Enemy.create(name: "Goblin", maxhp: 15, maxmp: 0, str: 5, int: 2, dex: 2, speed: 9, con: 5, wis: 2, gold: 2, level: 1, xp: 10)

# Enemy.create(name: "Giant Rat", maxhp: 10, maxmp: 0, str: 5, int: 2, dex: 2, speed: 9, con: 5, wis: 2, gold: 1, level: 1, xp: 10)

# Enemy.create(name: "Orc", maxhp: 20, maxmp: 0, str: 7, int: 2, dex: 2, speed: 9, con:8, wis: 2, gold: 5, level: 1, xp: 10)

# Enemy.create(name: "White Wolf", maxhp: 12, maxmp: 0, str: 7, int: 2, dex: 2, speed: 9, con: 5, wis: 2, gold: 2, level: 1, xp: 10)

puts "creating items!"

# Item.create(name: "Healing Potion", heal: 15, poisonheal: false, price: 20 )

# Item.create(name: "Healing Herb", heal: 5, poisonheal: false, price: 14 )