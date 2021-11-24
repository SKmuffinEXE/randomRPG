class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :health
      t.integer :mhealth
      t.integer :mana
      t.integer :mmana
      t.integer :str
      t.integer :int
      t.integer :dex
      t.integer :speed
      t.integer :con
      t.integer :wis
      t.integer :gold
      t.integer :level
      t.integer :points
      t.integer :killcount

      t.timestamps
    end
  end
end
