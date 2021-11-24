class Attack < ApplicationRecord
    belongs_to :character
    belongs_to :Enemy
end
