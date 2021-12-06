class AddExpToCharacter < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :exp, :integer
  end
end
