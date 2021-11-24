class Enemy < ApplicationRecord
    has_many :items
    has_many :attacks
end
