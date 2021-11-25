class Attack < ApplicationRecord
    has_many :character_attacks
    has_many :characters
    has_many :enemy_attacks
    has_many :enemies, through: :enemy_attacks

    def learn_attack(character)
        character.attacks << self

    end
end
