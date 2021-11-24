class CreateAttacks < ActiveRecord::Migration[6.1]
  def change
    create_table :attacks do |t|
      t.string :name
      t.string :text
      t.integer :damage
      t.boolean :poison
      t.integer :manacost

      t.timestamps
    end
  end
end
