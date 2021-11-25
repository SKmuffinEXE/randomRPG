class Enemy < ApplicationRecord
    has_many :enemy_item
    has_many :items, through: :enemy_items
    has_many :enemy_attacks
    has_many :attacks, through: :enemy_attacks

    def drops
        if self.items
            
        end
    end
end
