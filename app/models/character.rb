class Character < ApplicationRecord
    belongs_to :user

    has_many :character_attacks
    has_many :character_items
    has_many :items, through: :character_items
    has_many :attacks, through: :character_attacks

    def use_item(item)
        x = self.character_items.find_by(item_id: item)
        x.destroy
    end

end
