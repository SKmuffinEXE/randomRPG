class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :heal
      t.boolean :poisonheal
      t.integer :damage

      t.timestamps
    end
  end
end
