class AddidToAttack < ActiveRecord::Migration[6.1]
  def change
    add_column :attacks, :enemy_id, :integer
    add_column :attacks, :charater_id, :integer
  end
end
