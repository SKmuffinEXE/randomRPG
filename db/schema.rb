# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_24_145249) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attacks", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.integer "damage"
    t.boolean "poison"
    t.integer "manacost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "enemy_id"
    t.integer "charater_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "health"
    t.integer "mhealth"
    t.integer "mana"
    t.integer "mmana"
    t.integer "str"
    t.integer "int"
    t.integer "dex"
    t.integer "speed"
    t.integer "con"
    t.integer "wis"
    t.integer "gold"
    t.integer "level"
    t.integer "points"
    t.integer "killcount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "enemies", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.integer "str"
    t.integer "int"
    t.integer "dex"
    t.integer "speed"
    t.integer "con"
    t.integer "wis"
    t.integer "gold"
    t.integer "level"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "heal"
    t.boolean "poisonheal"
    t.integer "damage"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "character_id"
    t.integer "enemy_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
