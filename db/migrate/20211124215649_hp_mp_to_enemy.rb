class HpMpToEnemy < ActiveRecord::Migration[6.1]
  def change
    add_column :enemies, :maxhp, :integer
    add_column :enemies, :maxmp, :integer
  end
end
