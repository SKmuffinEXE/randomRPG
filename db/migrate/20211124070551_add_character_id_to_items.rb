class AddCharacterIdToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :character_id, :integer
  end
end
