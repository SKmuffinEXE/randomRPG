class CreateEnemies < ActiveRecord::Migration[6.1]
  def change
    create_table :enemies do |t|
      t.string :name
      t.string :image_url
      t.integer :str
      t.integer :int
      t.integer :dex
      t.integer :speed
      t.integer :con
      t.integer :wis
      t.integer :gold
      t.integer :level

      t.timestamps
    end
  end
end
