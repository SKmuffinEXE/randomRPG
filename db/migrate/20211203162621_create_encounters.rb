class CreateEncounters < ActiveRecord::Migration[6.1]
  def change
    create_table :encounters do |t|
      t.integer :enemy1
      t.integer :enemy2
      t.integer :enemy3
      t.integer :enemy4
      t.integer :enemy5

      t.timestamps
    end
  end
end
