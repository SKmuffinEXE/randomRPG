class AddEnemyIdToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :enemy_id, :integer
  end
end
