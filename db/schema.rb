# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_10_014255) do

  create_table "circles", force: :cascade do |t|
    t.string "title"
    t.integer "total"
    t.integer "metter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["metter_id"], name: "index_circles_on_metter_id"
  end

  create_table "functional_areas", force: :cascade do |t|
    t.string "title"
    t.integer "total"
    t.integer "metter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["metter_id"], name: "index_functional_areas_on_metter_id"
  end

  create_table "knowledge_areas", force: :cascade do |t|
    t.string "title"
    t.integer "metter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "total"
    t.index ["metter_id"], name: "index_knowledge_areas_on_metter_id"
  end

  create_table "metters", force: :cascade do |t|
    t.string "title"
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "profiles", force: :cascade do |t|
    t.string "title"
    t.integer "total"
    t.integer "metter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["metter_id"], name: "index_profiles_on_metter_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name", null: false
    t.text "ingredients", null: false
    t.text "instruction", null: false
    t.string "image", default: "https://raw.githubusercontent.com/do-community/react_rails_recipe/master/app/assets/images/Sammy_Meal.jpg"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shifts", force: :cascade do |t|
    t.string "title"
    t.integer "total"
    t.integer "metter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["metter_id"], name: "index_shifts_on_metter_id"
  end

end
