class CreateEnemyItems < ActiveRecord::Migration[6.1]
  def change
    create_table :enemy_items do |t|
      t.integer :enemy_id
      t.integer :item_id

      t.timestamps
    end
  end
end
