class Item < ApplicationRecord
    has_many :character_items
    has_many :character, through: :character_items
    has_many :enemy_items
    has_many :enemies, through: :enemy_items

    def get_item(character)
        character.items << self
    end
end
