class AddUseridToCharacter < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :user_id, :integer
  end
end
